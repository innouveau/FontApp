app.factory("sharedScope", function($rootScope) {
    var scope = $rootScope.$new(true);
    scope.data = {
        workareas : [{
            name : "Specimen mode",
            papers : [{
                left : 0,
                top : 100,
                width : "100%",
                height : "360px",
                overflow : "hidden",
                fields : [{
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : "Dosis",
                    fontWeight : 900,
                    fontStyle : "regular",
                    fontSize : 90,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
                    left : 0,
                    top : 0,
                    width : "100%",
                    height : "100%",
                    sliders : [50, 50, 50, 50, 50]
                }]
            }]
        }, {
            name : "Poster Mode",
            papers : [{
                left : 0,
                top : 100,
                width : "40%",
                height : "60%",
                overflow : "visible",
                fields : [{
                    text : "The quick brown fox jumps over a lazy dog.",
                    fontFamily : "Roboto",
                    fontWeight : 900,
                    fontStyle : "regular",
                    fontSize : 90,
                    lineHeight : 50,
                    textAlign : "left",
                    color : "rgb(0,0,0)",
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
        }]
    };
    return scope;
});

