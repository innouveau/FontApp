app.factory("sharedScope", function($rootScope) {
    var scope = $rootScope.$new(true);
    scope.data = {
        workareas : [{
            papers : [{
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "visible",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 294,
                    fontStyle : "regular",
                    fontSize : 40,
                    correctedSize : null,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 40,
                    top : 40,
                    width : 0,
                    height : 0,
                    sliders : [50, 50, 50, 50, 50]
                }]
            }, {
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "visible",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 747,
                    fontStyle : "regular",
                    fontSize : 40,
                    correctedSize : null,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 20,
                    top : 20,
                    width : 0,
                    height : 0,
                    sliders : [50, 50, 50, 50, 50]
                }]
            }, {
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "visible",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 965,
                    fontStyle : "regular",
                    fontSize : 40,
                    correctedSize : null,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 20,
                    top : 20,
                    width : 0,
                    height : 0,
                    sliders : [50, 50, 50, 50, 50]
                }]
            }, {
                left : 0,
                top : 100,
                width : "100%",
                height : "100%",
                overflow : "visible",
                fields : [{
                    fieldId: 0,
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : null,
                    fontWeight : null,
                    id : 745,
                    fontStyle : "regular",
                    fontSize : 40,
                    correctedSize : null,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    cmyk : [0, 0, 0, 100],
                    left : 20,
                    top : 20,
                    width : 0,
                    height : 0,
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
            edit : false
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

