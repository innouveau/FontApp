app.factory("sharedScope", function($rootScope) {
    var scope = $rootScope.$new(true);
    scope.data = {
        workareas : [{
            papers : [{
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "hidden",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 99,
                    fontStyle : "regular",
                    fontSize : 50,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 0,
                    top : 0,
                    width : "100%",
                    height : "100%",
                    sliders : [50, 50, 50, 50, 50]
                }]
            }, {
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "hidden",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 71,
                    fontStyle : "regular",
                    fontSize : 50,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 0,
                    top : 0,
                    width : "100%",
                    height : "100%",
                    sliders : [50, 50, 50, 50, 50]
                }]
            }, {
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "hidden",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 475,
                    fontStyle : "regular",
                    fontSize : 50,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 0,
                    top : 0,
                    width : "100%",
                    height : "100%",
                    sliders : [50, 50, 50, 50, 50]
                }]
            }, {
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "hidden",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 539,
                    fontStyle : "regular",
                    fontSize : 50,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 0,
                    top : 0,
                    width : "100%",
                    height : "100%",
                    sliders : [50, 50, 50, 50, 50]
                }]
            }]
        }],
        current : {
            workarea : null,
            paper : null,
            field : null
        },
        sliders : [{
            name : "Boldness",
            edit : true
        }, {
            name : "Serif Size",
            edit : false
        }, {
            name : "Width",
            edit : true
        }, {
            name : "Roundness",
            edit : false
        }, {
            name : "Ascender",
            edit : false
        }],
        redrawTrigger : 0
    };
    return scope;
});

