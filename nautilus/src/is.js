function isDragSourceExternalFile(dataTransfer){
    if (typeof Clipboard != 'undefined') {
        if (dataTransfer.constructor == Clipboard) {
            if (dataTransfer.files.length > 0)
                return true;
            else
                return false;
        }
    }

    if (typeof DOMStringList != 'undefined'){
        var DragDataType = dataTransfer.types;
        if (DragDataType.constructor == DOMStringList){
            if (DragDataType.contains('Files'))
                return true;
            else
                return false;
        }
    }
    if (typeof Array != 'undefined'){
        var DragDataType = dataTransfer.types;
        if (DragDataType.constructor == Array){
            if (DragDataType.indexOf('Files') != -1)
                return true;
            else
                return false;
        }
    }
}