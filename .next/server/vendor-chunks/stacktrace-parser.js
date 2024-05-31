"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stacktrace-parser";
exports.ids = ["vendor-chunks/stacktrace-parser"];
exports.modules = {

/***/ "(ssr)/./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parse: () => (/* binding */ parse)\n/* harmony export */ });\nvar UNKNOWN_FUNCTION = '<unknown>';\n/**\n * This parses the different stack traces and puts them into one format\n * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)\n */\n\nfunction parse(stackString) {\n  var lines = stackString.split('\\n');\n  return lines.reduce(function (stack, line) {\n    var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);\n\n    if (parseResult) {\n      stack.push(parseResult);\n    }\n\n    return stack;\n  }, []);\n}\nvar chromeRe = /^\\s*at (.*?) ?\\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\/|[a-z]:\\\\|\\\\\\\\).*?)(?::(\\d+))?(?::(\\d+))?\\)?\\s*$/i;\nvar chromeEvalRe = /\\((\\S*)(?::(\\d+))(?::(\\d+))\\)/;\n\nfunction parseChrome(line) {\n  var parts = chromeRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line\n\n  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line\n\n  var submatch = chromeEvalRe.exec(parts[2]);\n\n  if (isEval && submatch != null) {\n    // throw out eval line/column and use top-most line/column number\n    parts[2] = submatch[1]; // url\n\n    parts[3] = submatch[2]; // line\n\n    parts[4] = submatch[3]; // column\n  }\n\n  return {\n    file: !isNative ? parts[2] : null,\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: isNative ? [parts[2]] : [],\n    lineNumber: parts[3] ? +parts[3] : null,\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\nvar winjsRe = /^\\s*at (?:((?:\\[object object\\])?.+) )?\\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i;\n\nfunction parseWinjs(line) {\n  var parts = winjsRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[2],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[3],\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\nvar geckoRe = /^\\s*(.*?)(?:\\((.*?)\\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\\[native).*?|[^@]*bundle)(?::(\\d+))?(?::(\\d+))?\\s*$/i;\nvar geckoEvalRe = /(\\S+) line (\\d+)(?: > eval line \\d+)* > eval/i;\n\nfunction parseGecko(line) {\n  var parts = geckoRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;\n  var submatch = geckoEvalRe.exec(parts[3]);\n\n  if (isEval && submatch != null) {\n    // throw out eval line/column and use top-most line number\n    parts[3] = submatch[1];\n    parts[4] = submatch[2];\n    parts[5] = null; // no column when eval\n  }\n\n  return {\n    file: parts[3],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: parts[2] ? parts[2].split(',') : [],\n    lineNumber: parts[4] ? +parts[4] : null,\n    column: parts[5] ? +parts[5] : null\n  };\n}\n\nvar javaScriptCoreRe = /^\\s*(?:([^@]*)(?:\\((.*?)\\))?@)?(\\S.*?):(\\d+)(?::(\\d+))?\\s*$/i;\n\nfunction parseJSC(line) {\n  var parts = javaScriptCoreRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[3],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[4],\n    column: parts[5] ? +parts[5] : null\n  };\n}\n\nvar nodeRe = /^\\s*at (?:((?:\\[object object\\])?[^\\\\/]+(?: \\[as \\S+\\])?) )?\\(?(.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i;\n\nfunction parseNode(line) {\n  var parts = nodeRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[2],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[3],\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhY2t0cmFjZS1wYXJzZXIvZGlzdC9zdGFjay10cmFjZS1wYXJzZXIuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEOztBQUUvRCwyREFBMkQ7O0FBRTNEOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCLDRCQUE0Qjs7QUFFNUIsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0YWNrdHJhY2UtcGFyc2VyL2Rpc3Qvc3RhY2stdHJhY2UtcGFyc2VyLmVzbS5qcz9iNTI5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBVTktOT1dOX0ZVTkNUSU9OID0gJzx1bmtub3duPic7XG4vKipcbiAqIFRoaXMgcGFyc2VzIHRoZSBkaWZmZXJlbnQgc3RhY2sgdHJhY2VzIGFuZCBwdXRzIHRoZW0gaW50byBvbmUgZm9ybWF0XG4gKiBUaGlzIGJvcnJvd3MgaGVhdmlseSBmcm9tIFRyYWNlS2l0IChodHRwczovL2dpdGh1Yi5jb20vY3Nub3Zlci9UcmFjZUtpdClcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdGFja1N0cmluZykge1xuICB2YXIgbGluZXMgPSBzdGFja1N0cmluZy5zcGxpdCgnXFxuJyk7XG4gIHJldHVybiBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24gKHN0YWNrLCBsaW5lKSB7XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gcGFyc2VDaHJvbWUobGluZSkgfHwgcGFyc2VXaW5qcyhsaW5lKSB8fCBwYXJzZUdlY2tvKGxpbmUpIHx8IHBhcnNlTm9kZShsaW5lKSB8fCBwYXJzZUpTQyhsaW5lKTtcblxuICAgIGlmIChwYXJzZVJlc3VsdCkge1xuICAgICAgc3RhY2sucHVzaChwYXJzZVJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9LCBbXSk7XG59XG52YXIgY2hyb21lUmUgPSAvXlxccyphdCAoLio/KSA/XFwoKCg/OmZpbGV8aHR0cHM/fGJsb2J8Y2hyb21lLWV4dGVuc2lvbnxuYXRpdmV8ZXZhbHx3ZWJwYWNrfDxhbm9ueW1vdXM+fFxcL3xbYS16XTpcXFxcfFxcXFxcXFxcKS4qPykoPzo6KFxcZCspKT8oPzo6KFxcZCspKT9cXCk/XFxzKiQvaTtcbnZhciBjaHJvbWVFdmFsUmUgPSAvXFwoKFxcUyopKD86OihcXGQrKSkoPzo6KFxcZCspKVxcKS87XG5cbmZ1bmN0aW9uIHBhcnNlQ2hyb21lKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gY2hyb21lUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaXNOYXRpdmUgPSBwYXJ0c1syXSAmJiBwYXJ0c1syXS5pbmRleE9mKCduYXRpdmUnKSA9PT0gMDsgLy8gc3RhcnQgb2YgbGluZVxuXG4gIHZhciBpc0V2YWwgPSBwYXJ0c1syXSAmJiBwYXJ0c1syXS5pbmRleE9mKCdldmFsJykgPT09IDA7IC8vIHN0YXJ0IG9mIGxpbmVcblxuICB2YXIgc3VibWF0Y2ggPSBjaHJvbWVFdmFsUmUuZXhlYyhwYXJ0c1syXSk7XG5cbiAgaWYgKGlzRXZhbCAmJiBzdWJtYXRjaCAhPSBudWxsKSB7XG4gICAgLy8gdGhyb3cgb3V0IGV2YWwgbGluZS9jb2x1bW4gYW5kIHVzZSB0b3AtbW9zdCBsaW5lL2NvbHVtbiBudW1iZXJcbiAgICBwYXJ0c1syXSA9IHN1Ym1hdGNoWzFdOyAvLyB1cmxcblxuICAgIHBhcnRzWzNdID0gc3VibWF0Y2hbMl07IC8vIGxpbmVcblxuICAgIHBhcnRzWzRdID0gc3VibWF0Y2hbM107IC8vIGNvbHVtblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiAhaXNOYXRpdmUgPyBwYXJ0c1syXSA6IG51bGwsXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IGlzTmF0aXZlID8gW3BhcnRzWzJdXSA6IFtdLFxuICAgIGxpbmVOdW1iZXI6IHBhcnRzWzNdID8gK3BhcnRzWzNdIDogbnVsbCxcbiAgICBjb2x1bW46IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbFxuICB9O1xufVxuXG52YXIgd2luanNSZSA9IC9eXFxzKmF0ICg/OigoPzpcXFtvYmplY3Qgb2JqZWN0XFxdKT8uKykgKT9cXCg/KCg/OmZpbGV8bXMtYXBweHxodHRwcz98d2VicGFja3xibG9iKTouKj8pOihcXGQrKSg/OjooXFxkKykpP1xcKT9cXHMqJC9pO1xuXG5mdW5jdGlvbiBwYXJzZVdpbmpzKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gd2luanNSZS5leGVjKGxpbmUpO1xuXG4gIGlmICghcGFydHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogcGFydHNbMl0sXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IFtdLFxuICAgIGxpbmVOdW1iZXI6ICtwYXJ0c1szXSxcbiAgICBjb2x1bW46IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbFxuICB9O1xufVxuXG52YXIgZ2Vja29SZSA9IC9eXFxzKiguKj8pKD86XFwoKC4qPylcXCkpPyg/Ol58QCkoKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWV8d2VicGFja3xyZXNvdXJjZXxcXFtuYXRpdmUpLio/fFteQF0qYnVuZGxlKSg/OjooXFxkKykpPyg/OjooXFxkKykpP1xccyokL2k7XG52YXIgZ2Vja29FdmFsUmUgPSAvKFxcUyspIGxpbmUgKFxcZCspKD86ID4gZXZhbCBsaW5lIFxcZCspKiA+IGV2YWwvaTtcblxuZnVuY3Rpb24gcGFyc2VHZWNrbyhsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGdlY2tvUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaXNFdmFsID0gcGFydHNbM10gJiYgcGFydHNbM10uaW5kZXhPZignID4gZXZhbCcpID4gLTE7XG4gIHZhciBzdWJtYXRjaCA9IGdlY2tvRXZhbFJlLmV4ZWMocGFydHNbM10pO1xuXG4gIGlmIChpc0V2YWwgJiYgc3VibWF0Y2ggIT0gbnVsbCkge1xuICAgIC8vIHRocm93IG91dCBldmFsIGxpbmUvY29sdW1uIGFuZCB1c2UgdG9wLW1vc3QgbGluZSBudW1iZXJcbiAgICBwYXJ0c1szXSA9IHN1Ym1hdGNoWzFdO1xuICAgIHBhcnRzWzRdID0gc3VibWF0Y2hbMl07XG4gICAgcGFydHNbNV0gPSBudWxsOyAvLyBubyBjb2x1bW4gd2hlbiBldmFsXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzNdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBwYXJ0c1syXSA/IHBhcnRzWzJdLnNwbGl0KCcsJykgOiBbXSxcbiAgICBsaW5lTnVtYmVyOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGwsXG4gICAgY29sdW1uOiBwYXJ0c1s1XSA/ICtwYXJ0c1s1XSA6IG51bGxcbiAgfTtcbn1cblxudmFyIGphdmFTY3JpcHRDb3JlUmUgPSAvXlxccyooPzooW15AXSopKD86XFwoKC4qPylcXCkpP0ApPyhcXFMuKj8pOihcXGQrKSg/OjooXFxkKykpP1xccyokL2k7XG5cbmZ1bmN0aW9uIHBhcnNlSlNDKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gamF2YVNjcmlwdENvcmVSZS5leGVjKGxpbmUpO1xuXG4gIGlmICghcGFydHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogcGFydHNbM10sXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IFtdLFxuICAgIGxpbmVOdW1iZXI6ICtwYXJ0c1s0XSxcbiAgICBjb2x1bW46IHBhcnRzWzVdID8gK3BhcnRzWzVdIDogbnVsbFxuICB9O1xufVxuXG52YXIgbm9kZVJlID0gL15cXHMqYXQgKD86KCg/OlxcW29iamVjdCBvYmplY3RcXF0pP1teXFxcXC9dKyg/OiBcXFthcyBcXFMrXFxdKT8pICk/XFwoPyguKj8pOihcXGQrKSg/OjooXFxkKykpP1xcKT9cXHMqJC9pO1xuXG5mdW5jdGlvbiBwYXJzZU5vZGUobGluZSkge1xuICB2YXIgcGFydHMgPSBub2RlUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzJdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBbXSxcbiAgICBsaW5lTnVtYmVyOiArcGFydHNbM10sXG4gICAgY29sdW1uOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGxcbiAgfTtcbn1cblxuZXhwb3J0IHsgcGFyc2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js\n");

/***/ }),

/***/ "(instrument)/./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parse: () => (/* binding */ parse)\n/* harmony export */ });\nvar UNKNOWN_FUNCTION = '<unknown>';\n/**\n * This parses the different stack traces and puts them into one format\n * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)\n */\n\nfunction parse(stackString) {\n  var lines = stackString.split('\\n');\n  return lines.reduce(function (stack, line) {\n    var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);\n\n    if (parseResult) {\n      stack.push(parseResult);\n    }\n\n    return stack;\n  }, []);\n}\nvar chromeRe = /^\\s*at (.*?) ?\\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\/|[a-z]:\\\\|\\\\\\\\).*?)(?::(\\d+))?(?::(\\d+))?\\)?\\s*$/i;\nvar chromeEvalRe = /\\((\\S*)(?::(\\d+))(?::(\\d+))\\)/;\n\nfunction parseChrome(line) {\n  var parts = chromeRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line\n\n  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line\n\n  var submatch = chromeEvalRe.exec(parts[2]);\n\n  if (isEval && submatch != null) {\n    // throw out eval line/column and use top-most line/column number\n    parts[2] = submatch[1]; // url\n\n    parts[3] = submatch[2]; // line\n\n    parts[4] = submatch[3]; // column\n  }\n\n  return {\n    file: !isNative ? parts[2] : null,\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: isNative ? [parts[2]] : [],\n    lineNumber: parts[3] ? +parts[3] : null,\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\nvar winjsRe = /^\\s*at (?:((?:\\[object object\\])?.+) )?\\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i;\n\nfunction parseWinjs(line) {\n  var parts = winjsRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[2],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[3],\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\nvar geckoRe = /^\\s*(.*?)(?:\\((.*?)\\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\\[native).*?|[^@]*bundle)(?::(\\d+))?(?::(\\d+))?\\s*$/i;\nvar geckoEvalRe = /(\\S+) line (\\d+)(?: > eval line \\d+)* > eval/i;\n\nfunction parseGecko(line) {\n  var parts = geckoRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;\n  var submatch = geckoEvalRe.exec(parts[3]);\n\n  if (isEval && submatch != null) {\n    // throw out eval line/column and use top-most line number\n    parts[3] = submatch[1];\n    parts[4] = submatch[2];\n    parts[5] = null; // no column when eval\n  }\n\n  return {\n    file: parts[3],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: parts[2] ? parts[2].split(',') : [],\n    lineNumber: parts[4] ? +parts[4] : null,\n    column: parts[5] ? +parts[5] : null\n  };\n}\n\nvar javaScriptCoreRe = /^\\s*(?:([^@]*)(?:\\((.*?)\\))?@)?(\\S.*?):(\\d+)(?::(\\d+))?\\s*$/i;\n\nfunction parseJSC(line) {\n  var parts = javaScriptCoreRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[3],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[4],\n    column: parts[5] ? +parts[5] : null\n  };\n}\n\nvar nodeRe = /^\\s*at (?:((?:\\[object object\\])?[^\\\\/]+(?: \\[as \\S+\\])?) )?\\(?(.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i;\n\nfunction parseNode(line) {\n  var parts = nodeRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[2],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[3],\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL3N0YWNrdHJhY2UtcGFyc2VyL2Rpc3Qvc3RhY2stdHJhY2UtcGFyc2VyLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtEQUErRDs7QUFFL0QsMkRBQTJEOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qiw0QkFBNEI7O0FBRTVCLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL215X3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdGFja3RyYWNlLXBhcnNlci9kaXN0L3N0YWNrLXRyYWNlLXBhcnNlci5lc20uanM/YzcyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVU5LTk9XTl9GVU5DVElPTiA9ICc8dW5rbm93bj4nO1xuLyoqXG4gKiBUaGlzIHBhcnNlcyB0aGUgZGlmZmVyZW50IHN0YWNrIHRyYWNlcyBhbmQgcHV0cyB0aGVtIGludG8gb25lIGZvcm1hdFxuICogVGhpcyBib3Jyb3dzIGhlYXZpbHkgZnJvbSBUcmFjZUtpdCAoaHR0cHM6Ly9naXRodWIuY29tL2Nzbm92ZXIvVHJhY2VLaXQpXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RhY2tTdHJpbmcpIHtcbiAgdmFyIGxpbmVzID0gc3RhY2tTdHJpbmcuc3BsaXQoJ1xcbicpO1xuICByZXR1cm4gbGluZXMucmVkdWNlKGZ1bmN0aW9uIChzdGFjaywgbGluZSkge1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHBhcnNlQ2hyb21lKGxpbmUpIHx8IHBhcnNlV2luanMobGluZSkgfHwgcGFyc2VHZWNrbyhsaW5lKSB8fCBwYXJzZU5vZGUobGluZSkgfHwgcGFyc2VKU0MobGluZSk7XG5cbiAgICBpZiAocGFyc2VSZXN1bHQpIHtcbiAgICAgIHN0YWNrLnB1c2gocGFyc2VSZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfSwgW10pO1xufVxudmFyIGNocm9tZVJlID0gL15cXHMqYXQgKC4qPykgP1xcKCgoPzpmaWxlfGh0dHBzP3xibG9ifGNocm9tZS1leHRlbnNpb258bmF0aXZlfGV2YWx8d2VicGFja3w8YW5vbnltb3VzPnxcXC98W2Etel06XFxcXHxcXFxcXFxcXCkuKj8pKD86OihcXGQrKSk/KD86OihcXGQrKSk/XFwpP1xccyokL2k7XG52YXIgY2hyb21lRXZhbFJlID0gL1xcKChcXFMqKSg/OjooXFxkKykpKD86OihcXGQrKSlcXCkvO1xuXG5mdW5jdGlvbiBwYXJzZUNocm9tZShsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGNocm9tZVJlLmV4ZWMobGluZSk7XG5cbiAgaWYgKCFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGlzTmF0aXZlID0gcGFydHNbMl0gJiYgcGFydHNbMl0uaW5kZXhPZignbmF0aXZlJykgPT09IDA7IC8vIHN0YXJ0IG9mIGxpbmVcblxuICB2YXIgaXNFdmFsID0gcGFydHNbMl0gJiYgcGFydHNbMl0uaW5kZXhPZignZXZhbCcpID09PSAwOyAvLyBzdGFydCBvZiBsaW5lXG5cbiAgdmFyIHN1Ym1hdGNoID0gY2hyb21lRXZhbFJlLmV4ZWMocGFydHNbMl0pO1xuXG4gIGlmIChpc0V2YWwgJiYgc3VibWF0Y2ggIT0gbnVsbCkge1xuICAgIC8vIHRocm93IG91dCBldmFsIGxpbmUvY29sdW1uIGFuZCB1c2UgdG9wLW1vc3QgbGluZS9jb2x1bW4gbnVtYmVyXG4gICAgcGFydHNbMl0gPSBzdWJtYXRjaFsxXTsgLy8gdXJsXG5cbiAgICBwYXJ0c1szXSA9IHN1Ym1hdGNoWzJdOyAvLyBsaW5lXG5cbiAgICBwYXJ0c1s0XSA9IHN1Ym1hdGNoWzNdOyAvLyBjb2x1bW5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogIWlzTmF0aXZlID8gcGFydHNbMl0gOiBudWxsLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBpc05hdGl2ZSA/IFtwYXJ0c1syXV0gOiBbXSxcbiAgICBsaW5lTnVtYmVyOiBwYXJ0c1szXSA/ICtwYXJ0c1szXSA6IG51bGwsXG4gICAgY29sdW1uOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGxcbiAgfTtcbn1cblxudmFyIHdpbmpzUmUgPSAvXlxccyphdCAoPzooKD86XFxbb2JqZWN0IG9iamVjdFxcXSk/LispICk/XFwoPygoPzpmaWxlfG1zLWFwcHh8aHR0cHM/fHdlYnBhY2t8YmxvYik6Lio/KTooXFxkKykoPzo6KFxcZCspKT9cXCk/XFxzKiQvaTtcblxuZnVuY3Rpb24gcGFyc2VXaW5qcyhsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IHdpbmpzUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzJdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBbXSxcbiAgICBsaW5lTnVtYmVyOiArcGFydHNbM10sXG4gICAgY29sdW1uOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGxcbiAgfTtcbn1cblxudmFyIGdlY2tvUmUgPSAvXlxccyooLio/KSg/OlxcKCguKj8pXFwpKT8oPzpefEApKCg/OmZpbGV8aHR0cHM/fGJsb2J8Y2hyb21lfHdlYnBhY2t8cmVzb3VyY2V8XFxbbmF0aXZlKS4qP3xbXkBdKmJ1bmRsZSkoPzo6KFxcZCspKT8oPzo6KFxcZCspKT9cXHMqJC9pO1xudmFyIGdlY2tvRXZhbFJlID0gLyhcXFMrKSBsaW5lIChcXGQrKSg/OiA+IGV2YWwgbGluZSBcXGQrKSogPiBldmFsL2k7XG5cbmZ1bmN0aW9uIHBhcnNlR2Vja28obGluZSkge1xuICB2YXIgcGFydHMgPSBnZWNrb1JlLmV4ZWMobGluZSk7XG5cbiAgaWYgKCFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGlzRXZhbCA9IHBhcnRzWzNdICYmIHBhcnRzWzNdLmluZGV4T2YoJyA+IGV2YWwnKSA+IC0xO1xuICB2YXIgc3VibWF0Y2ggPSBnZWNrb0V2YWxSZS5leGVjKHBhcnRzWzNdKTtcblxuICBpZiAoaXNFdmFsICYmIHN1Ym1hdGNoICE9IG51bGwpIHtcbiAgICAvLyB0aHJvdyBvdXQgZXZhbCBsaW5lL2NvbHVtbiBhbmQgdXNlIHRvcC1tb3N0IGxpbmUgbnVtYmVyXG4gICAgcGFydHNbM10gPSBzdWJtYXRjaFsxXTtcbiAgICBwYXJ0c1s0XSA9IHN1Ym1hdGNoWzJdO1xuICAgIHBhcnRzWzVdID0gbnVsbDsgLy8gbm8gY29sdW1uIHdoZW4gZXZhbFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBwYXJ0c1szXSxcbiAgICBtZXRob2ROYW1lOiBwYXJ0c1sxXSB8fCBVTktOT1dOX0ZVTkNUSU9OLFxuICAgIGFyZ3VtZW50czogcGFydHNbMl0gPyBwYXJ0c1syXS5zcGxpdCgnLCcpIDogW10sXG4gICAgbGluZU51bWJlcjogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsLFxuICAgIGNvbHVtbjogcGFydHNbNV0gPyArcGFydHNbNV0gOiBudWxsXG4gIH07XG59XG5cbnZhciBqYXZhU2NyaXB0Q29yZVJlID0gL15cXHMqKD86KFteQF0qKSg/OlxcKCguKj8pXFwpKT9AKT8oXFxTLio/KTooXFxkKykoPzo6KFxcZCspKT9cXHMqJC9pO1xuXG5mdW5jdGlvbiBwYXJzZUpTQyhsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGphdmFTY3JpcHRDb3JlUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzNdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBbXSxcbiAgICBsaW5lTnVtYmVyOiArcGFydHNbNF0sXG4gICAgY29sdW1uOiBwYXJ0c1s1XSA/ICtwYXJ0c1s1XSA6IG51bGxcbiAgfTtcbn1cblxudmFyIG5vZGVSZSA9IC9eXFxzKmF0ICg/OigoPzpcXFtvYmplY3Qgb2JqZWN0XFxdKT9bXlxcXFwvXSsoPzogXFxbYXMgXFxTK1xcXSk/KSApP1xcKD8oLio/KTooXFxkKykoPzo6KFxcZCspKT9cXCk/XFxzKiQvaTtcblxuZnVuY3Rpb24gcGFyc2VOb2RlKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbm9kZVJlLmV4ZWMobGluZSk7XG5cbiAgaWYgKCFwYXJ0cykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiBwYXJ0c1syXSxcbiAgICBtZXRob2ROYW1lOiBwYXJ0c1sxXSB8fCBVTktOT1dOX0ZVTkNUSU9OLFxuICAgIGFyZ3VtZW50czogW10sXG4gICAgbGluZU51bWJlcjogK3BhcnRzWzNdLFxuICAgIGNvbHVtbjogcGFydHNbNF0gPyArcGFydHNbNF0gOiBudWxsXG4gIH07XG59XG5cbmV4cG9ydCB7IHBhcnNlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parse: () => (/* binding */ parse)\n/* harmony export */ });\nvar UNKNOWN_FUNCTION = '<unknown>';\n/**\n * This parses the different stack traces and puts them into one format\n * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)\n */\n\nfunction parse(stackString) {\n  var lines = stackString.split('\\n');\n  return lines.reduce(function (stack, line) {\n    var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);\n\n    if (parseResult) {\n      stack.push(parseResult);\n    }\n\n    return stack;\n  }, []);\n}\nvar chromeRe = /^\\s*at (.*?) ?\\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\\/|[a-z]:\\\\|\\\\\\\\).*?)(?::(\\d+))?(?::(\\d+))?\\)?\\s*$/i;\nvar chromeEvalRe = /\\((\\S*)(?::(\\d+))(?::(\\d+))\\)/;\n\nfunction parseChrome(line) {\n  var parts = chromeRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line\n\n  var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line\n\n  var submatch = chromeEvalRe.exec(parts[2]);\n\n  if (isEval && submatch != null) {\n    // throw out eval line/column and use top-most line/column number\n    parts[2] = submatch[1]; // url\n\n    parts[3] = submatch[2]; // line\n\n    parts[4] = submatch[3]; // column\n  }\n\n  return {\n    file: !isNative ? parts[2] : null,\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: isNative ? [parts[2]] : [],\n    lineNumber: parts[3] ? +parts[3] : null,\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\nvar winjsRe = /^\\s*at (?:((?:\\[object object\\])?.+) )?\\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i;\n\nfunction parseWinjs(line) {\n  var parts = winjsRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[2],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[3],\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\nvar geckoRe = /^\\s*(.*?)(?:\\((.*?)\\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\\[native).*?|[^@]*bundle)(?::(\\d+))?(?::(\\d+))?\\s*$/i;\nvar geckoEvalRe = /(\\S+) line (\\d+)(?: > eval line \\d+)* > eval/i;\n\nfunction parseGecko(line) {\n  var parts = geckoRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;\n  var submatch = geckoEvalRe.exec(parts[3]);\n\n  if (isEval && submatch != null) {\n    // throw out eval line/column and use top-most line number\n    parts[3] = submatch[1];\n    parts[4] = submatch[2];\n    parts[5] = null; // no column when eval\n  }\n\n  return {\n    file: parts[3],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: parts[2] ? parts[2].split(',') : [],\n    lineNumber: parts[4] ? +parts[4] : null,\n    column: parts[5] ? +parts[5] : null\n  };\n}\n\nvar javaScriptCoreRe = /^\\s*(?:([^@]*)(?:\\((.*?)\\))?@)?(\\S.*?):(\\d+)(?::(\\d+))?\\s*$/i;\n\nfunction parseJSC(line) {\n  var parts = javaScriptCoreRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[3],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[4],\n    column: parts[5] ? +parts[5] : null\n  };\n}\n\nvar nodeRe = /^\\s*at (?:((?:\\[object object\\])?[^\\\\/]+(?: \\[as \\S+\\])?) )?\\(?(.*?):(\\d+)(?::(\\d+))?\\)?\\s*$/i;\n\nfunction parseNode(line) {\n  var parts = nodeRe.exec(line);\n\n  if (!parts) {\n    return null;\n  }\n\n  return {\n    file: parts[2],\n    methodName: parts[1] || UNKNOWN_FUNCTION,\n    arguments: [],\n    lineNumber: +parts[3],\n    column: parts[4] ? +parts[4] : null\n  };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3RhY2t0cmFjZS1wYXJzZXIvZGlzdC9zdGFjay10cmFjZS1wYXJzZXIuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStEOztBQUUvRCwyREFBMkQ7O0FBRTNEOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCLDRCQUE0Qjs7QUFFNUIsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0YWNrdHJhY2UtcGFyc2VyL2Rpc3Qvc3RhY2stdHJhY2UtcGFyc2VyLmVzbS5qcz85NDA3Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBVTktOT1dOX0ZVTkNUSU9OID0gJzx1bmtub3duPic7XG4vKipcbiAqIFRoaXMgcGFyc2VzIHRoZSBkaWZmZXJlbnQgc3RhY2sgdHJhY2VzIGFuZCBwdXRzIHRoZW0gaW50byBvbmUgZm9ybWF0XG4gKiBUaGlzIGJvcnJvd3MgaGVhdmlseSBmcm9tIFRyYWNlS2l0IChodHRwczovL2dpdGh1Yi5jb20vY3Nub3Zlci9UcmFjZUtpdClcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdGFja1N0cmluZykge1xuICB2YXIgbGluZXMgPSBzdGFja1N0cmluZy5zcGxpdCgnXFxuJyk7XG4gIHJldHVybiBsaW5lcy5yZWR1Y2UoZnVuY3Rpb24gKHN0YWNrLCBsaW5lKSB7XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gcGFyc2VDaHJvbWUobGluZSkgfHwgcGFyc2VXaW5qcyhsaW5lKSB8fCBwYXJzZUdlY2tvKGxpbmUpIHx8IHBhcnNlTm9kZShsaW5lKSB8fCBwYXJzZUpTQyhsaW5lKTtcblxuICAgIGlmIChwYXJzZVJlc3VsdCkge1xuICAgICAgc3RhY2sucHVzaChwYXJzZVJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9LCBbXSk7XG59XG52YXIgY2hyb21lUmUgPSAvXlxccyphdCAoLio/KSA/XFwoKCg/OmZpbGV8aHR0cHM/fGJsb2J8Y2hyb21lLWV4dGVuc2lvbnxuYXRpdmV8ZXZhbHx3ZWJwYWNrfDxhbm9ueW1vdXM+fFxcL3xbYS16XTpcXFxcfFxcXFxcXFxcKS4qPykoPzo6KFxcZCspKT8oPzo6KFxcZCspKT9cXCk/XFxzKiQvaTtcbnZhciBjaHJvbWVFdmFsUmUgPSAvXFwoKFxcUyopKD86OihcXGQrKSkoPzo6KFxcZCspKVxcKS87XG5cbmZ1bmN0aW9uIHBhcnNlQ2hyb21lKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gY2hyb21lUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaXNOYXRpdmUgPSBwYXJ0c1syXSAmJiBwYXJ0c1syXS5pbmRleE9mKCduYXRpdmUnKSA9PT0gMDsgLy8gc3RhcnQgb2YgbGluZVxuXG4gIHZhciBpc0V2YWwgPSBwYXJ0c1syXSAmJiBwYXJ0c1syXS5pbmRleE9mKCdldmFsJykgPT09IDA7IC8vIHN0YXJ0IG9mIGxpbmVcblxuICB2YXIgc3VibWF0Y2ggPSBjaHJvbWVFdmFsUmUuZXhlYyhwYXJ0c1syXSk7XG5cbiAgaWYgKGlzRXZhbCAmJiBzdWJtYXRjaCAhPSBudWxsKSB7XG4gICAgLy8gdGhyb3cgb3V0IGV2YWwgbGluZS9jb2x1bW4gYW5kIHVzZSB0b3AtbW9zdCBsaW5lL2NvbHVtbiBudW1iZXJcbiAgICBwYXJ0c1syXSA9IHN1Ym1hdGNoWzFdOyAvLyB1cmxcblxuICAgIHBhcnRzWzNdID0gc3VibWF0Y2hbMl07IC8vIGxpbmVcblxuICAgIHBhcnRzWzRdID0gc3VibWF0Y2hbM107IC8vIGNvbHVtblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaWxlOiAhaXNOYXRpdmUgPyBwYXJ0c1syXSA6IG51bGwsXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IGlzTmF0aXZlID8gW3BhcnRzWzJdXSA6IFtdLFxuICAgIGxpbmVOdW1iZXI6IHBhcnRzWzNdID8gK3BhcnRzWzNdIDogbnVsbCxcbiAgICBjb2x1bW46IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbFxuICB9O1xufVxuXG52YXIgd2luanNSZSA9IC9eXFxzKmF0ICg/OigoPzpcXFtvYmplY3Qgb2JqZWN0XFxdKT8uKykgKT9cXCg/KCg/OmZpbGV8bXMtYXBweHxodHRwcz98d2VicGFja3xibG9iKTouKj8pOihcXGQrKSg/OjooXFxkKykpP1xcKT9cXHMqJC9pO1xuXG5mdW5jdGlvbiBwYXJzZVdpbmpzKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gd2luanNSZS5leGVjKGxpbmUpO1xuXG4gIGlmICghcGFydHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogcGFydHNbMl0sXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IFtdLFxuICAgIGxpbmVOdW1iZXI6ICtwYXJ0c1szXSxcbiAgICBjb2x1bW46IHBhcnRzWzRdID8gK3BhcnRzWzRdIDogbnVsbFxuICB9O1xufVxuXG52YXIgZ2Vja29SZSA9IC9eXFxzKiguKj8pKD86XFwoKC4qPylcXCkpPyg/Ol58QCkoKD86ZmlsZXxodHRwcz98YmxvYnxjaHJvbWV8d2VicGFja3xyZXNvdXJjZXxcXFtuYXRpdmUpLio/fFteQF0qYnVuZGxlKSg/OjooXFxkKykpPyg/OjooXFxkKykpP1xccyokL2k7XG52YXIgZ2Vja29FdmFsUmUgPSAvKFxcUyspIGxpbmUgKFxcZCspKD86ID4gZXZhbCBsaW5lIFxcZCspKiA+IGV2YWwvaTtcblxuZnVuY3Rpb24gcGFyc2VHZWNrbyhsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGdlY2tvUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaXNFdmFsID0gcGFydHNbM10gJiYgcGFydHNbM10uaW5kZXhPZignID4gZXZhbCcpID4gLTE7XG4gIHZhciBzdWJtYXRjaCA9IGdlY2tvRXZhbFJlLmV4ZWMocGFydHNbM10pO1xuXG4gIGlmIChpc0V2YWwgJiYgc3VibWF0Y2ggIT0gbnVsbCkge1xuICAgIC8vIHRocm93IG91dCBldmFsIGxpbmUvY29sdW1uIGFuZCB1c2UgdG9wLW1vc3QgbGluZSBudW1iZXJcbiAgICBwYXJ0c1szXSA9IHN1Ym1hdGNoWzFdO1xuICAgIHBhcnRzWzRdID0gc3VibWF0Y2hbMl07XG4gICAgcGFydHNbNV0gPSBudWxsOyAvLyBubyBjb2x1bW4gd2hlbiBldmFsXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzNdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBwYXJ0c1syXSA/IHBhcnRzWzJdLnNwbGl0KCcsJykgOiBbXSxcbiAgICBsaW5lTnVtYmVyOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGwsXG4gICAgY29sdW1uOiBwYXJ0c1s1XSA/ICtwYXJ0c1s1XSA6IG51bGxcbiAgfTtcbn1cblxudmFyIGphdmFTY3JpcHRDb3JlUmUgPSAvXlxccyooPzooW15AXSopKD86XFwoKC4qPylcXCkpP0ApPyhcXFMuKj8pOihcXGQrKSg/OjooXFxkKykpP1xccyokL2k7XG5cbmZ1bmN0aW9uIHBhcnNlSlNDKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gamF2YVNjcmlwdENvcmVSZS5leGVjKGxpbmUpO1xuXG4gIGlmICghcGFydHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlsZTogcGFydHNbM10sXG4gICAgbWV0aG9kTmFtZTogcGFydHNbMV0gfHwgVU5LTk9XTl9GVU5DVElPTixcbiAgICBhcmd1bWVudHM6IFtdLFxuICAgIGxpbmVOdW1iZXI6ICtwYXJ0c1s0XSxcbiAgICBjb2x1bW46IHBhcnRzWzVdID8gK3BhcnRzWzVdIDogbnVsbFxuICB9O1xufVxuXG52YXIgbm9kZVJlID0gL15cXHMqYXQgKD86KCg/OlxcW29iamVjdCBvYmplY3RcXF0pP1teXFxcXC9dKyg/OiBcXFthcyBcXFMrXFxdKT8pICk/XFwoPyguKj8pOihcXGQrKSg/OjooXFxkKykpP1xcKT9cXHMqJC9pO1xuXG5mdW5jdGlvbiBwYXJzZU5vZGUobGluZSkge1xuICB2YXIgcGFydHMgPSBub2RlUmUuZXhlYyhsaW5lKTtcblxuICBpZiAoIXBhcnRzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbGU6IHBhcnRzWzJdLFxuICAgIG1ldGhvZE5hbWU6IHBhcnRzWzFdIHx8IFVOS05PV05fRlVOQ1RJT04sXG4gICAgYXJndW1lbnRzOiBbXSxcbiAgICBsaW5lTnVtYmVyOiArcGFydHNbM10sXG4gICAgY29sdW1uOiBwYXJ0c1s0XSA/ICtwYXJ0c1s0XSA6IG51bGxcbiAgfTtcbn1cblxuZXhwb3J0IHsgcGFyc2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/stacktrace-parser/dist/stack-trace-parser.esm.js\n");

/***/ })

};
;