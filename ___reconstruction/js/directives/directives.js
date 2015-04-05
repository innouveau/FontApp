app.directive('field', function() {
    return {
        restrict : 'E',
        require : 'ngModel',
        link : function(scope, element, attrs, ctrl) {
            $(element[0]).attr("contenteditable", "true");
            element.bind('blur', function(event) {
                finishedRenaming(element[0]);
            });
            element.bind('keypress', function(event) {
                if (event.which == 13) {
                    finishedRenaming(element[0]);
                    $(element[0]).blur();
                }
            });
            ctrl.$render = function() {
                element.html(ctrl.$viewValue);
            };
            function finishedRenaming(div) {
                scope.$apply(function() {
                    scope.changeText(element.html());
                });
            }

        }
    };
});

app.directive('slider', function($document) {
    return {
        restrict : 'E',
        link : function(scope, element, attrs, ctrl) {
            var labelWidth = 90, axisWidth = 136, boxHeight = 20, buttonWidth = 32, spacing = 16, buttonSize = 6;
            var thisIndex = attrs.index;
            var type = attrs.type;
            var boundaryLeft = labelWidth, boundaryRight = axisWidth + labelWidth;
            
            var svg = d3.select(element[0]).append('svg');
            var layer2 = svg.append('g');
            var layer1 = svg.append('g');

            scope.$watchCollection('[shared.current.field]', function(newVals, oldVals, scope) {
                return redraw();
            }, true);

            /***** redraw *****/
            function redraw() {
                if (type == "parameter") {
                    var thisValue = scope.shared.current.field.sliders[thisIndex];
                    var labelName = scope.shared.sliders[thisIndex].name;
                } else if (type == "color") {
                    labelWidth = 30;
                    var thisValue = scope.shared.current.field.cmyk[thisIndex];
                    var labelName = scope.cmyk[thisIndex];
                } else {
                    if (type == "fontsize") {
                        var thisValue = scope.shared.current.field.fontSize;
                        var labelName = "Font Size";
                    } else if (type == "lineheight") {
                        var thisValue = scope.shared.current.field.lineHeight;
                        var labelName = "Line Height";
                    }
                }
                var xPosition = labelWidth + thisValue / 100 * axisWidth;
                
                
                // remove previous slider
                layer1.selectAll('*').remove();

                var drag = d3.behavior.drag().on('dragstart', function() {
                }).on('drag', function() {
                    var xPosition = limitX(d3.event.x);
                    d3.select(this).attr('cx', xPosition);
                    thisValue = Math.round((xPosition - labelWidth) / axisWidth * 100);

                    if (type == "parameter") {
                        scope.shared.current.field.sliders[thisIndex] = thisValue;
                        if (scope.shared.sliders[thisIndex].edit) {
                            scope.shared.findFont();
                        }
                    } else if (type == "color") {
                        scope.shared.current.field.cmyk[thisIndex] = thisValue;
                        scope.updateColor();
                    } else if (type == "fontsize") {
                        scope.changeFontSize(thisValue);
                    } else if (type == "lineheight") {
                        scope.changeLineHeight(thisValue);
                    }
                    scope.$apply();
                }).on('dragend', function() {
                });

                var background = layer2.append('rect').attr('x', '0').attr('y', '0').attr('width', (labelWidth + axisWidth + buttonWidth)).attr('height', boxHeight).attr('class', 'slider-background');
                var label = layer2.append('text').attr('x', 0).attr('y', (boxHeight - 4)).text(labelName).attr('class', 'slider-label');
                var axis = layer2.append('line').attr('x1', labelWidth).attr('y1', (0.5 * boxHeight)).attr('x2', (labelWidth + axisWidth)).attr('y2', (0.5 * boxHeight)).attr('class', 'slider-axis');
                var slider = layer1.append('circle').attr('r', 8).attr('cx', xPosition).attr('cy', (0.5 * boxHeight)).attr('class', 'slider-handle').call(drag);
                if (type == "parameter") {
                    var button = layer1.append('rect').attr('x', (labelWidth + axisWidth + spacing)).attr('y', ((boxHeight - buttonSize) / 2)).attr('width', buttonSize).attr('height', buttonSize).attr('class', function() {
                        if (scope.shared.sliders[thisIndex].edit) {
                            return 'slider-button-on';
                        } else {
                            return 'slider-button-off';
                        }
                    }).on('click', function() {
                        scope.shared.sliders[thisIndex].edit = !scope.shared.sliders[thisIndex].edit;
                        scope.$apply();
                        redraw();
                    });
                }

                function limitX(x) {
                    if (x < boundaryLeft) {
                        x = boundaryLeft;
                    }
                    if (x > boundaryRight) {
                        x = boundaryRight;
                    }
                    return x;
                }

            }

        }
    };
});

app.directive('body', function() {
    return {
        restrict : 'E',
        link : function(scope, element, attrs, ctrl) {
            element.bind('mouseup', function(event) {
                if (!$(event.target).parents('dropdown').length && !$(event.target).parents('.dropdown').length && !$(event.target).parents('.clickfree').length) {
                    for (var x in scope.shared.settings.dropdown) {
                        scope.shared.settings.dropdown[x] = false;
                    }
                }
                scope.$apply();
            });
        }
    };
});