(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{3745:function(module,exports){module.exports=function(hljs){var RE_IDENT="~?[a-z$_][0-9a-zA-Z$_]*",RE_MODULE_IDENT="`?[A-Z$_][0-9a-zA-Z$_]*",RE_OPERATOR="("+function orReValues(ops){return ops.map((function(op){return op.split("").map((function(char){return"\\"+char})).join("")})).join("|")}(["||","&&","++","**","+.","*","/","*.","/.","...","|>"])+"|==|===)",RE_OPERATOR_SPACED="\\s+"+RE_OPERATOR+"\\s+",KEYWORDS={keyword:"and as asr assert begin class constraint do done downto else end exception externalfor fun function functor if in include inherit initializerland lazy let lor lsl lsr lxor match method mod module mutable new nonrecobject of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},RE_NUMBER="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",NUMBER_MODE={className:"number",relevance:0,variants:[{begin:RE_NUMBER},{begin:"\\(\\-"+RE_NUMBER+"\\)"}]},OPERATOR_MODE={className:"operator",relevance:0,begin:RE_OPERATOR},LIST_CONTENTS_MODES=[{className:"identifier",relevance:0,begin:RE_IDENT},OPERATOR_MODE,NUMBER_MODE],MODULE_ACCESS_CONTENTS=[hljs.QUOTE_STRING_MODE,OPERATOR_MODE,{className:"module",begin:"\\b"+RE_MODULE_IDENT,returnBegin:!0,end:".",contains:[{className:"identifier",begin:RE_MODULE_IDENT,relevance:0}]}],PARAMS_CONTENTS=[{className:"module",begin:"\\b"+RE_MODULE_IDENT,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:RE_MODULE_IDENT,relevance:0}]}],FUNCTION_BLOCK_MODE={className:"function",relevance:0,keywords:KEYWORDS,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+RE_IDENT+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:RE_IDENT},{begin:"~?[a-z$_][0-9a-zA-Z$_]*(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?(s*:s*[a-z$_][0-9a-z$_]*((s*('?[a-z$_][0-9a-z$_]*s*(,'?[a-z$_][0-9a-z$_]*)*)?s*))?)?"},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[{begin:RE_IDENT,end:"(,|\\n|\\))",relevance:0,contains:[OPERATOR_MODE,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:PARAMS_CONTENTS}]}]}]},{begin:"\\(\\.\\s"+RE_IDENT+"\\)\\s*=>"}]};MODULE_ACCESS_CONTENTS.push(FUNCTION_BLOCK_MODE);var CONSTRUCTOR_MODE={className:"constructor",begin:RE_MODULE_IDENT+"\\(",end:"\\)",illegal:"\\n",keywords:KEYWORDS,contains:[hljs.QUOTE_STRING_MODE,OPERATOR_MODE,{className:"params",begin:"\\b"+RE_IDENT}]},PATTERN_MATCH_BLOCK_MODE={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:KEYWORDS,end:"=>",relevance:0,contains:[CONSTRUCTOR_MODE,OPERATOR_MODE,{relevance:0,className:"constructor",begin:RE_MODULE_IDENT}]},MODULE_ACCESS_MODE={className:"module-access",keywords:KEYWORDS,returnBegin:!0,variants:[{begin:"\\b("+RE_MODULE_IDENT+"\\.)+"+RE_IDENT},{begin:"\\b("+RE_MODULE_IDENT+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[FUNCTION_BLOCK_MODE,{begin:"\\(",end:"\\)",skip:!0}].concat(MODULE_ACCESS_CONTENTS)},{begin:"\\b("+RE_MODULE_IDENT+"\\.)+{",end:"}"}],contains:MODULE_ACCESS_CONTENTS};return PARAMS_CONTENTS.push(MODULE_ACCESS_MODE),{aliases:["re"],keywords:KEYWORDS,illegal:"(:\\-|:=|\\${|\\+=)",contains:[hljs.COMMENT("/\\*","\\*/",{illegal:"^(\\#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},hljs.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:LIST_CONTENTS_MODES},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:LIST_CONTENTS_MODES},CONSTRUCTOR_MODE,{className:"operator",begin:RE_OPERATOR_SPACED,illegal:"\\-\\->",relevance:0},NUMBER_MODE,hljs.C_LINE_COMMENT_MODE,PATTERN_MATCH_BLOCK_MODE,FUNCTION_BLOCK_MODE,{className:"module-def",begin:"\\bmodule\\s+"+RE_IDENT+"\\s+"+RE_MODULE_IDENT+"\\s+=\\s+{",end:"}",returnBegin:!0,keywords:KEYWORDS,relevance:0,contains:[{className:"module",relevance:0,begin:RE_MODULE_IDENT},{begin:"{",end:"}",skip:!0}].concat(MODULE_ACCESS_CONTENTS)},MODULE_ACCESS_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_reasonml.c95b55b2d95b87f0ea44.bundle.js.map