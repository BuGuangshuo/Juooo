<template>
    <!-- 登录页面 -->
    <div class="login">
        <div class="head">
            <div class="login__title">
                <img src="/static/img/Left.png" class="back_img" @click="$router.back()">
            </div>
        </div>
        <div class="body">
            <div>
                <div class="login__cnt">
                    <img src="/static/img/login_logo.4a43235.png" class="login__cnt__logo">
                    <div class="login__cnt__pwd">
                    <div class="login__cnt__pwd__input">
                        <div class="login__cnt__pwd__input__item">
                            <input type="text" placeholder="请输入手机号/邮箱" class="login__cnt__pwd__input__item__text">
                        </div>
                        <div class="login__cnt__pwd__input__item">
                            <input type="password" class="login__cnt__pwd__input__item__text" placeholder="请输入密码">
                            <span class="login__cnt__pwd__input__item__eye"></span>
                        </div>
                    </div>
                    <div class="login__cnt__pwd__btn">
                        <div class="login__cnt__pwd__btn__login">登录</div>
                        <div class="login__cnt__pwd__btn__link">
                            <a class="login__cnt__pwd__btn__link--pwd">忘记密码</a>
                            <a class="login__cnt__pwd__btn__link--code">验证码登录/注册</a>
                        </div>
                    </div>
                </div>
                </div>
                <div class="login__foot">
                    <p class="login__foot__title">
                        <span class="login__foot__title__txt">其他登录方式</span>
                    </p>
                    <div class="login__foot__list">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAflBMVEUAAABZ0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v9Z0v/N82+IAAAAKXRSTlMAHAbS5d7Zd6ZmYUkS+/PI8FAy6LSTLRa6rCENsPdavoZUnHFDPduAaSOXaiYAAALWSURBVFjDvZhpc+IwDIbl2DnJSQ5COMLZ9v3/f3A7O3RLIzkJsLvPB4YZjGW/lmRZNEITHdbapEBq9PoQNfQ4cRSUGFAGUUyPsNgmANzAL5ZqQ7RRy8IPXADJdkEzcSIPQP/R0YDuowfgRc6slXiA8RWJKN8A3vSK1BpwwxF7TugCa0WjHHOkvjOxaT9FfhwbUAOVoklUBdRWY6sMyZlmcU6QrSw2PJglzWRp4ClxFhda0WyUhquEHXnI4of8PIPH9uVk0PGD8aKRDXWuYRQ9iDKoB/6C3ZIeZrnD8ce8OUJ6ghD5/R7WqCz23tsSKNv3hkSq+z8ukIrCXDL8IbuK8qQo6AsPvhQaJ9wju78Pj27s4QojNj0GVMIox8X+9lWL+gZgnESV9ZcyRjCzh0AhLMdgcTPrC7++QcAT1Ql+a7BLhJAvILIQgjHZbYgoQisqIxIQp0X0+bkVBS4h4ooibz8/cyhiKFiIpbE5USNauMKCFMAuGorE/RawsBB1jKiWjnuTwULmSEdeUyX51AesRNLSK9LSdtewIUmwhKYSHTF6WGmlozKUIpY8ykolKImUAC5aV8JKKSwekKaJXYzgbVgYA9KmthglYGaRMomZ6027YAcjHLiHCTQ/cO5+C0xyYe7HgyHAJCcWDDw0DSZxWWjyRIEZsETB01YCtBpWsh7YsbTFk+gbytUeVo6qhGZJlKf0s26I9MhhN/rMU7p8wVxg4SpeMNbr7gSRWrzurJfvRUNEX+TLVy4FRiQueClgK0ycHFZKhxUmtjKpwQgdK5NsRdsq+SFrjTuSmBVt1hIy/J7H+xSwePueJRpkuGqsoO0OfZmnpj1cbyd3aE2am/69Gytoaf9seb0fuNtzxf7pHzw9Xn8Ivf4se/2R+FefrK8/oF9/zv+H5sLLrQ7eeAkVmyNsWeNlZhuoURty4q5hbaB5xKHQlFqH8/2ct8iS3J1qkf0CRVzU1V96oY0AAAAASUVORK5CYII=" class="login__foot__list__item">
                        <img src="/static/img/weibo.f5b598c.png" class="login__foot__list__item">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('hide')
  },
  destroyed () {
    this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
    .login{
        width: 100%;
        height: 100%;
        min-height: 16rem;
        background-color: #FEFEFE;
        position: relative;
        .login__foot{
            position: absolute;
            bottom: 0.8rem;
            left: 1.86667rem;
            right: 1.86667rem;
        }
        .login__foot__title{
            width: 100%;
            border-top: 1px solid #999999;
        }
        .back_img{
                width: 1.2rem;
                height: 1.2rem;
            }
        .login__foot__title__txt{
            display: inline-block;
            position: absolute;
            left: 50%;
            top: -0.33333rem;
            margin-left: -1.33333rem;
            width: 2.66667rem;
            height: 0.66667rem;
            line-height: 0.66667rem;
            color: #999999;
            text-align: center;
            background-color: #fefefe;
            font-size: 12px;
        }
        .login__foot__list{
            display: flex;
            justify-content: space-around;
            margin-top: 0.93333rem;
        }
        .login__foot__list__item{
            width: 0.93333rem;
            height: 0.93333rem;
        }
    }
    .login__title{
        height: 1.17333rem;
        line-height: 1.17333rem;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
    }
    .login__cnt__logo{
        display: block;
        width: 4.26667rem;
        height: 1.34667rem;
        margin: 0.76rem auto 0.90667rem;
    }
    .login__cnt__pwd{
        width: 8.29333rem;
        margin: 0 auto;
    }
    .login__cnt__pwd__input__item{
        margin-top: 0.26667rem;
        padding: 0.48rem 0;
        border-bottom: 1px solid #999999;
        display: flex;
        align-items: center;
    }
    .login__cnt__pwd__input__item__text{
        flex: 1;
        color: #232323;
        font-size: 0.42667rem;
    }
    .login__cnt__pwd__input__item__eye{
        width: 0.48rem;
        height: 0.48rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAclBMVEUAAAAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwAUBwDEQhyNAAAAJXRSTlMAb/pNJfS7Zx0H+O/k1a6ae1ITDuDa1svBtKaTiHxiYEhCNDAZ7PgDFQAAANZJREFUOMvtkMcOgzAQRNedmBIS0jtl/v8XI4MRsiin5Ma77Gj1DrtDKz8lUjnNk6vIDQm9IGnIdsZ2P+vsbdyFLZ6z0hPbLkiuotl7ufQxw2kz6WxOyHwUHLhNSjeAi97JE1yLkVJckeTOah1D8ojDjkJ2BxwlmdayeLtXNZBVNFBlgHbVvGGJjPA9KCB9CFlQIcUjBZT/Xhjy1Igbc8bA2TQxagq4gLlaXnedINH3lyuO4RIeibRvioH1LaUInmG8pJFEJWdhtxRKwzYklJb52A+t/I8vJ5wOuxPAkioAAAAASUVORK5CYII=) no-repeat center top;
        background-size: 100% 100%;
        vertical-align: middle;
        margin-left: 0.37333rem;
    }

    .login__cnt__pwd__btn{
        width: 8.29333rem;
        margin: 0 auto;
    }
    .login__cnt__pwd__btn__login{
        height: 1.33333rem;
        line-height: 1.33333rem;
        border-radius: 0.66667rem;
        margin: 1.2rem auto 0.52rem;
        text-align: center;
        font-size: 0.48rem;
        background: linear-gradient(50deg, #ff9a34, #ff4d4a);
        color: #FEFEFE;
        opacity: 0.4;
    }
    .login__cnt__pwd__btn__link{
        font-size: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .login__cnt__pwd__btn__link--pwd{
        color: #666666;
    }
    .login__cnt__pwd__btn__link--code{
        color: #666666;
    }

</style>
