<template>
    <div class="bottom-bar detail__bottom-bar bottom-bar--sticky detail__bottom-bar--sticky">
        <div class="bottom-bar__client-service">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC" class="bottom-bar__client-service__img">
            <div class="bottom-bar__client-service__text">客服</div>
        </div>
        <div class="bottom-bar__btn-wrapper">
            <div class="bottom-bar__btn">选座购买</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .detail__bottom-bar{
        position: fixed;
        z-index: 10;
        bottom: 0;
    }
    .bottom-bar{
        border: 1px solid #ebebeb;
        height: 1.46667rem;
        display: flex;
        width: 100%;
        box-sizing: border-box;
        align-items: center;
        background-color: #fefefe;
    }
    .bottom-bar__client-service{
        width: 1.36rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .bottom-bar__client-service__img{
        width: 0.53333rem;
        height: 0.53333rem;
    }
    .bottom-bar__client-service__text{
        font-size: 0.26667rem;
        color: #666666;
    }
    .bottom-bar__btn-wrapper{
        width: 100%;
    }
    .bottom-bar__btn{
        height: 1.06667rem;
        background-image: linear-gradient(50deg, #ff9a34, #ff4d4a);
        border-radius: 0.53333rem;
        background-blend-mode: normal, normal;
        flex-grow: 1;
        font-size: 0.45333rem;
        font-weight: bold;
        color: #fefefe;
        text-align: center;
        line-height: 1.06667rem;
        margin-right: 0.32rem;
    }
</style>
