export default {
    commColseRouter () {
        $("#tagsNav .tags-li").each(function(index){
            if($(this).hasClass("active")){
                $(this).find(".el-icon-close").click();
            }
        });
    }
}