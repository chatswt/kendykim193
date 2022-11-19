function homeBlockSlideBottomUp()
    {
        if ($(".home-slideBottomUp").hasClass("set") == false) {
            $(".home-slideBottomUp").addClass("set"); $.ajax({
                type: "GET", url: '/api/home/homeBlock.asmx/values?pid=' + 0 + "&setupKey=HOMEBLOCK_SLIDEFOOTER_UP", success: function (data) {

                    var json = $.parseJSON($(data).find("string").text()); 
                    if (json.data) {
                        $(".home-slideBottomUp").append(json.data);
                        slideBottomUpOwl();
                    };
                },
            });
        }
    };
    $(document).ready(function () { homeBlockSlideBottomUp(); });