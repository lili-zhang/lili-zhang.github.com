//(function(){
    /**
     * 收藏
     */
    var favor = document.querySelector('#favor'),
        class_name = favor.className,
        seriesId = '$!detail.seriesId',
        objectId = ('0'=='$!detail.seriesId') ? '$!detail.id' : '$!detail.seriesId',
        resType = ('0'=='$!detail.seriesId') ? '$!detail.resType' : 'series',
        favoriteId = '$!favorite.id',
        favoriteId = (favoriteId=='') ? 0 : favoriteId,
        v = '$!v',
        t,
        isclick = true;

    if(isclick){
        favor.addEventListener('click',function(){

            isclick = false;//不可点

            if(class_name==='icon-favor '){//未收藏
                $.ajax({
                    url: '/android/favorite/add/?v='+v+'&objectId='+objectId+'&resType='+resType+'&userId=$!userId',
                    dataType: 'json',
                    timeout: 3000,
                    success: function(data, status, xhr){
                        if(data.status ==='ok'){
                            try {
                                favor.className = 'icon-favor active ';
                                class_name = favor.className;
                                favoriteId = data.favoriteId;

                                //弹窗
                                favorWin('win-active','收藏成功');
                                t = setInterval(function(){
                                    favorWin('', '收藏成功');
                                },3000);

                            }catch (e){
                                throw e;
                            }
                        }
                    },
                    error: function(xhr, errType, err){
                        //弹窗
                        favorWin('win-active','网络连接失败');
                        t = setInterval(function(){
                            favorWin('', '网络连接失败');
                        },3000);
                    },
                    complete: function(xhr){
                        isclick = true;
                    }
                });
            }else{//已收藏
                $.ajax({
                    url: '/android/favorite/delete/?v='+v+'&ids='+favoriteId+'&userId=$!userId',
                    dataType: 'json',
                    timeout: 3000,
                    success: function(data, status, xhr){
                        if(data.status ==='ok'){
                            try {
                                favor.className = 'icon-favor ';
                                class_name = favor.className;

                                //弹窗
                                favorWin('win-active','取消收藏');
                                t = setInterval(function(){
                                    favorWin('', '取消收藏');
                                },3000);

                            }catch (e){
                                throw e;
                            }
                        }
                    },
                    error: function(xhr, errType, err){
                        //弹窗
                        favorWin('win-active','网络连接失败');
                        t = setInterval(function(){
                            favorWin('', '网络连接失败');
                        },3000);
                    },
                    complete: function(xhr){
                        isclick = true;
                    }
                });
            }
        },false);
    }

    function favorWin(classname, msg){
        document.getElementById('win').className = classname;
        document.getElementById('win').innerText = msg;
        clearInterval(t);
    }

    //置灰下载与分享
    function cancelActive(){
        var download = document.querySelectorAll('.tv-title .icon-download')[0],
            share = document.querySelectorAll('.tv-title .icon-share')[0];

        if(share.className == 'icon-share active'){
            share.className = 'icon-share';
        }

        if(download){
            if(download.className == 'icon-download active'){
                download.className = 'icon-download';
            }
        }
    }
//})();