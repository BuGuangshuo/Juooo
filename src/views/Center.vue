<template>
    <!-- 个人中心 -->
    <div class="mine">
        <div class="mine__body">
            <div class="mine-info mine-info">
                <div class="mine-info__icon" @click="$router.push('/login')">
                    <a href="#">
                        <i class="iconfont icon-shezhi"></i>
                    </a>
                </div>
                <div class="mine-info__main" @click="$router.push('/login')">
                    <div class="mine-info__main__head">
                        <div class="mine-info__main__head__pic mine-info__main__head__pic--no">
                            <img src="/static/img/logo-user.8413cbf.png" alt="">
                        </div>
                        <span class="mine-info__main__head__name mine-info__main__head__login">登录/注册</span>
                        <span class="mine-info__main__head__uid">请点击登录</span>
                    </div>
                    <div class="mine-info__main__label">
                        <p class="mine-info__main__label__name mine-info__main__label__name--no">普通会员</p>
                    </div>
                    <div class="mine-info__main__cnt">
                        <div class="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                            <p class="mine-info__main__cnt__item__num">0</p>
                            <p class="mine-info__main__cnt__item__name">账户余额</p>
                            <div class="separator"></div>
                        </div>

                        <div class="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                            <p class="mine-info__main__cnt__item__num">0</p>
                            <p class="mine-info__main__cnt__item__name">积分</p>
                            <div class="separator"></div>
                        </div>

                        <div class="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                            <p class="mine-info__main__cnt__item__num">0</p>
                            <p class="mine-info__main__cnt__item__name">优惠劵</p>
                            <div class="separator"></div>
                        </div>

                        <div class="mine-info__main__cnt__item mine-info__main__cnt__item--disabled">
                            <p class="mine-info__main__cnt__item__num mine-info__main__cnt__item__num--no">立即开通</p>
                            <p class="mine-info__main__cnt__item__name">橙PLUS卡</p>
                            <div class="separator"></div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" class="mine-vip" @click="$router.push('/login')">
                    <img src="/static/img/ad.411f5e6.png" alt="" class="mine-vip__pic">
            </a>
            <div class="mine-setting">
                <ul class="mine-setting__list" @click="$router.push('/login')">
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-order"></i>
                            <p class="mine-setting__list__item__name">我的订单</p>
                        </div>
                    </li>
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-ticketholder"></i>
                            <p class="mine-setting__list__item__name">我的票夹</p>
                        </div>
                    </li>
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-cardpackage"></i>
                            <p class="mine-setting__list__item__name">我的卡包</p>
                        </div>
                    </li>
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">

                        </div>
                    </li>
                </ul>
                <ul class="mine-setting__list" @click="$router.push('/login')">
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-people"></i>
                            <p class="mine-setting__list__item__name">实名购票人</p>
                        </div>
                    </li>
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-address"></i>
                            <p class="mine-setting__list__item__name">收货地址</p>
                        </div>
                    </li>
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-feedback"></i>
                            <p class="mine-setting__list__item__name">意见反馈</p>
                        </div>
                    </li>
                    <li class="mine-setting__list__item">
                        <div class="mine-setting__list__item--link">
                            <i class="icon icon-help"></i>
                            <p class="mine-setting__list__item__name .mine-setting__list__item__name--active" style="color:#FF6743;">客服帮助</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Loading -->
        <!-- <div class="loading_bg" v-show="loadingShow?'true':'false'">
            <div class="loading">
                <img src="/static/img/loading.65b0197.svg" class="loading__pic">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
  data () {
    return {
      loadingShow: true
    }
  },
  mounted () {
    this.loadingShow = false
  }
}
</script>
<style lang="scss" scoped>
    .mine{
        height: 100%;
        background-color: #F5F5F5;
        .mine__body{
            padding-bottom: 3.1rem;
            .mine-info{
                height: 5.58667rem;
                background: url(/static/img/personal_bg_1.f5fc96c.png) no-repeat top center;
                background-size: 100%;
                position: relative;
                overflow: hidden;
                .mine-info__icon{
                    position: absolute;
                    right: 0.4rem;
                    top: 0.4rem;
                    font-size: 0.48rem;
                    color: #FEFEFE;
                    padding-right: 0.13333rem;
                    i{
                        color: #FEFEFE;
                        margin-left: 0.13333rem;
                        font-size: 0.69rem;
                        font-style: normal;
                    }
                }
                .mine-info__main{
                    background: #fff;
                    box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,0.08);
                    border-radius: 0.10667rem;
                    margin: 1.53333rem 0.4rem 0;
                    position: relative;
                    .mine-info__main__head{
                        padding: 0 0.4rem;
                        position: relative;
                        .mine-info__main__head__pic{
                            display: inline-block;
                            width: 1.6rem;
                            height: 1.6rem;
                            border-radius: 50%;
                            border: 0.02667rem solid #ffffff;
                            margin-top: -0.32rem;
                            margin-right: 0.26667rem;
                            background: #f5f5f5;
                            overflow: hidden;
                        }
                        .mine-info__main__head__pic--no{
                            border: 0.02667rem solid #EBEBEB;
                        }
                        .mine-info__main__head__name{
                            position: absolute;
                            top: 0.33333rem;
                            color: #232323;
                            font-size: 0.4rem;
                            font-weight: bold;
                        }
                        .mine-info__main__head__login{
                            top: 0.24rem;
                        }
                        .mine-info__main__head__uid{
                            position: absolute;
                            color: #999999;
                            font-size: 0.32rem;
                            bottom: 0;
                        }
                    }
                    .mine-info__main__label{
                        margin-top: -0.09333rem;
                        overflow: hidden;
                        .mine-info__main__label__name{
                            float: right;
                            font-size: 0.37333rem;
                            color: #454341;
                            font-weight: bold;
                            padding: 0.09333rem 0.28rem 0.09333rem 0.38667rem;
                            background: linear-gradient(-45deg, #f5dea9, #f8d583);
                            border-radius: 0.36rem 0px 0px 0.36rem;
                        }
                        .mine-info__main__label__name--no{
                            background: #F5F5F5;
                            color: #B3B3B3;
                        }
                    }
                    .mine-info__main__cnt{
                        display: flex;
                        align-items: center;
                        .mine-info__main__cnt__item{
                            flex: 1;
                            text-align: center;
                            position: relative;
                            padding: 0.4rem 0 0.52rem;
                            color: #666666;
                            font-weight: 500;
                            font-size: 0.32rem;
                            .mine-info__main__cnt__item__num{
                                color: #232323;
                                font-size: 0.53333rem;
                                margin-bottom: 0.2rem;
                            }
                            .mine-info__main__cnt__item__num--no{
                                color: #232323;
                                font-size: 0.34667rem;
                            }
                            .separator{
                                position: absolute;
                                width: 1px;
                                height: 0.8rem;
                                background: #ebebeb;
                                top: 0.8rem;
                                right: 0;
                            }
                            }

                        }
                    }
                }
            .mine-vip{
                display: block;
                padding: 0 0.06667rem;
                .mine-vip__pic{
                    display: block;
                    max-width: 100%;
                    margin: 0 auto;
                }
                }
            .mine-setting{
                padding: 0 0.4rem;
                .mine-setting__list{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-bottom: 0.32rem;
                    background-color: #ffffff;
                    box-shadow: 0px 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,0.08);
                    border-radius: 0.10667rem;
                    .mine-setting__list__item{
                        width: 25%;
                        text-align: center;
                        padding: 0.44rem 0 0.53333rem;
                        font-size: 0.32rem;
                        color: #666666;
                        .icon{
                            display: inline-block;
                            width: 0.88rem;
                            height: 0.88rem;
                            &.icon-order{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAgVBMVEUAAAAAAAAAAAAAAAD/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MAAAAAAAAAAAAAAAAAAAD/Z0MAAAAAAAAAAAAAAAAAAAAAAAAAAAD/Z0P/Z0P/Z0MAAAAAAAD/Z0MAAAAAAAAAAAAAAAAAAAAAAAAAAAD/Z0MAAAD/Z0P/Z0P/Z0MAAAD/Z0MSZ/PxAAAAKXRSTlMAQGBw4GCAEPJv6dvIrgoF3tK3nmlXT0pUMPjw0qKSgGVLOiQhBuGaJkoBkn4AAAERSURBVFjD7dbJboMwFIVhAkkLxjYzhMxj25P3f8BKgBTLlR2bRRUSfxsMF/0Sw8Ke40xQQCAgwYgCJMaN0y7v701BfQFF2pfz3UkbuBYASLcEjuLkCHRHAqC4ahIMIKzqljGyQJAh7i5XjABMXaiBgg/rAySHYcALoFYmctD7SZlCkJb3CUWuTKzhewZ8rJUzYGaSmAEu8aaJZBH12tGJ5W3wNTrxMw973xN/nS+TuGzmks3F/r+QLS0TSfQhiZJJvs4nSTQLSWObaG5/NJaJNpQLYWv7IMmnJJnoF3n3xAq1SaLGSjmj2JoktqC6HW/1uFDpdsI8A1jpa5UMyLindI5hID57GnwfPwzsuec4/+EXZE1D5hGu1XMAAAAASUVORK5CYII=) no-repeat center;
                                background-size: 100%;
                            }
                            &.icon-ticketholder{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAaVBMVEUAAAAjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0P/Z0P/Z0P/Z0MjIyP/Z0M1nzAVAAAAIXRSTlMAUGDp+dI97qiFcWtGPxMNCLwm4864t6CSZVMcBOu3XyZL94LbAAABEUlEQVRYw+2WyZKDIBRFsRHnIZo5poeT///IXqXaiILW60UWnOWFOoUCj6cCgUBgO7vCxIzpJhO650Bsit2cYTBM0JMZmj/MMLMGA8cyGtNPpvTPgfIIxl5HAaVaTQmFFR44qQ2cOFhZzHWL4kpsZRBtUUTwtorba/Dz+eVQ3GYUKdn9Jfh+PJYN94zUCi+wz9tR8LGsaPM9XOy4A3SyRpFooGuVTZVBnPgVSQxZtaCvU3TjUzSatFaLJJD7FDkkysEZ7VNozspFDb1b0UPtVDRQuRUVNP+ukH+I/HfKN1V+tOQHXH7N5JddXnLEhe+NK7hEIX8Q5c+yvDmwWxQ/dotiN0p+zOBo11yM27VAILCSX6W3L1JtE1WpAAAAAElFTkSuQmCC) no-repeat center;
                                background-size: 100%;
                            }
                            &.icon-cardpackage{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAhFBMVEUAAAAjIyMjIyMjIyP/Z0P/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0P/Z0P/Z0MjIyPPWDwjIyP/Z0P/Z0P/Z0OzUDgjIyP/Z0P/Z0MjIyP/Z0MjIyP/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyP/Z0P/Z0MjIyP/Z0PWWj0NSpg1AAAAKXRSTlMAMHDAcNDt16Ze+fgsDlUqBvbcNNnMwp+Wi4stIxYU4d7XsIReXVJOEDs31QsAAADpSURBVFjD7dbZCoMwEAXQsYtrtWo39+7LjP//f0UQCk4qsYGikPOacJHJgBc0TZuYlW1ij6Pf3nu4pr0CkcDFXl7ZXpwhohsAt/bQcjbGd+Xncx0LvTUwNlo+yPIttIEx0QF5DprAIBogz0DUEf0Ru7m8nTBiGHFENpOXjXmcOmJsEemCCaFR8INUHFETkzQn1YmYWhyxXXacie4A4Z6iZddWdhYXinI4ED1/H+crpvhKtFB5kTwiooPao96I9qHiXiRxpbpaYTG9BR9DhMKfXbVf8JYjY8NaDutaEtxgUOPjmsanadr/vAGXNERcLhswuQAAAABJRU5ErkJggg==) no-repeat center;
                            background-size: 100%;
                            }
                            &.icon-people{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAA21BMVEUAAAAjIyMjIyMjIyMjIyP/Z0MjIyP/Z0P/Z0O0Tzf/Z0MjIyP/Z0MjIyP/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyMjIyP/Z0MjIyMjIyP/Z0P/Z0MjIyMjIyP/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyP/Z0P/Z0MjIyMjIyMjIyP/Z0MjIyP/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyMjIyP/Z0MjIyP/Z0MjIyMjIyMjIyP/Z0MjIyMjIyMjIyMjIyP/Z0P/Z0MjIyP/Z0O9Hy1DAAAAR3RSTlMAUECwkQv869MD6L+2FQX68GNNQz4sJvXl4uCsnpZvbCYeFc7Fo498eFhVEfPv7trXy7ytnZSHhHt1amJcVUg2NDIRCMqYiVcI5W0AAAGuSURBVFjD7ZdrU4JQEIY1RRBREEHzfr9X5r3MyrQ67///RWEpYIZwYGqciecTyw7PwHLYswR8fP4T8fAlseEq9HzKUNEE9kQerA3RWxIJPwZPc58lkRdLRZeQJwcPmyV5y2SBxAIOKJNry1yIhJ0oLgj5TUWB3HlVrLsbCgUFnhVMP+pcESMahwVNNVlAHCUZh4obomFeGTUBO3KKM0UluCWux9UckJv35NIIEHtuasFwQCfxeajwEFcuFG1gqd8Qjzq9IiGhaUQykKJWpIC0KeRQpFa0wZnDOerUiiIEc5gET62Yeld0MDCH7xg6UJRDGvngLlIA1dRVB2g5UETIltf9RTzGRm4JKNR3ESgBpf2xKqHhYnUmGkDr6xPtScik3fSLGgew42lrwgGZlLuWUx1iByu76lrRBQuDtxq9oi8AEJJqn6nKRQnIrSgUeiEEvYTMTNTLYSjsX0fHfEJhkVGpFDNgcXhGZcElKHpnWsTke1oGShQdvAiWOco3wVPsI20kj/NpqU5TC+bHGkf/ZE9dBzdnMF+cy6BEMfF5nzu9T7/eZ3DvfwI+PnZ8ADxSeptslfbxAAAAAElFTkSuQmCC) no-repeat center;
                                background-size: 100%;
                            }
                            &.icon-address{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAA6lBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyP/Z0P/Z0MjIyMjIyP/Z0P/Z0MjIyMjIyP/Z0P/Z0MjIyP/Z0MjIyMjIyMjIyMjIyP/Z0P/Z0P/Z0P/Z0MjIyMjIyMjIyP/Z0MjIyP/Z0MjIyP/Z0P/Z0MjIyMjIyMjIyP/Z0MjIyP/Z0MjIyMjIyMjIyMjIyObRzP/Z0MjIyMjIyP/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyP/Z0P/Z0P/Z0MjIyMjIyMjIyMjIyMjIyP/Z0MOgR1eAAAATHRSTlMA+/dNQmm7eArukPPUIQqeOvzz5N6vbioFs1o1GdjU0cjAsKmhm5CIfXNjUUkWEw3so5QfBODKxMC4pJqIgmZcTD07MyMaGRLHq39+BJ+fPQAAAmBJREFUWMPtlulyolAQhcEtIiCC4hY1Go2axLhnsu/bLKff/3VGaoSGogAhVfPL86v7nvKj+/a9grDXXv9d+ckoV5GBVCU3SucTAEoLGS6lsnEBhz1YKue0QkHLlQH8iNnCEhtdZVf2QiurZWIRagqAfk1IrpIMKCXhO4QUoOW/Q6jNgT/B9i8lssG8AvwOtqeAElXhEtDC/BNgGXEefE8pFn1VHoYickCJs6/qtUFkXFe/XLsN5CKK6HNWlWgrqcqr/fAyNKDmdGASkWEOh6axCUynnxqwCBmHjCsnMa2H162obpVjOkYPcvBQMoBzIU+J2qqdqG2iUzvJApNAxAh434YXBkkqO6pExsU2XgGjQEQDZVcRj27r0VVGOWQmFfa6JNXdVl2iLk++EoiQnZO51unW692SvnZOaCoQARTsrSB68HoPRPZmFIAdEJ9EY683JvrcASHjxG5dpzuvd0d6fYdGymjYYYcuvd4lddyD88m/1fdEz27rmejePzi/CsDUPks6tWfszNqkq/y3UwhEnANNOx4S3RSdK3dDNLSTJnAefM1EHDu/OiI6ev0Xv1qxwzuGOBX8Yrdlxx8dIuqOn57G3U3Q+XBeS9ZzgjVxtzkbkKPBzL1h6RDEWoG44vRtINFG0uCN195TEa/XNNDzLKgvL6p38FxE4H3HQZh/ADSEcLXm1sjCxj5vCRHKiBDTISYyQqTOEMjIpIAzTmMxmLDj91KTGUkIzEhOYIaPwOOOvR9MiKUsMxISmJGcwAwmJGYwITmjJDMhEaO/4BoSMgAmJFKmJ4o/J8Jee8XWX0Rnb9JDAsewAAAAAElFTkSuQmCC) no-repeat center;
                                background-size: 100%;
                            }
                            &.icon-feedback{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAilBMVEUAAAAjIyMjIyP/Z0MjIyMjIyMjIyMjIyP/Z0MjIyMjIyP/Z0MjIyMjIyMjIyP/Z0MjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0PY68upAAAALHRSTlMAUGAw+20LBxrX0/zmzXY9PSoZ7tvEvLapko1kIRHgz7Cvm46DSDUlBPOAKyZZxbMAAAElSURBVFjD7dTXboMwAEbhH2ogkAVk7z3aHt7/9ZoqqmgiRyJw06h8l8Y62JZs1Wr/ht+JDPf6vnIDwEQdXw/MQyxMms849+BbOJeVH8Lade593vzlMuCuIbSvowOuCnGhI5uIjQraEMnG4KogFyMbcFSQA08kut2qiUaWNSom3rLsrU7UiTrxONFoNqteMyWJrImXe3Kqn0WSZUnVjex2f+E4n0oYZipohpFNm5EKGtGWjQeebIrPDFYw9NzcKf92cnPeEFaBrNI2N96Dn/jecKOd6oHAG/TImfN1+BjxW2/gBSpkSnjtToFxqhJGjHUR96HlqJQWH5I/AcYLlbIAR/ESWgeVFMNxC2wXKmsGLVgeVN4EYOKrgiH0Y1WyN1NftdqL+wLBhzn7gVaWpQAAAABJRU5ErkJggg==) no-repeat center;
                                background-size: 100%;
                            }
                            &.icon-help{
                                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAtFBMVEUAAAAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyP/Z0MjIyMjIyP/Z0MjIyMjIyMjIyMjIyP/Z0MjIyMjIyMjIyP/Z0P/Z0P/Z0P/Z0P/Z0P/Z0P/Z0MjIyP/Z0NjNyx3PS8jIyMjIyP/Z0NaNCsfsrhgAAAAOXRSTlMAQCD2yvED24FQNRMK4tO4saB4cl4vBu9pWExGRfvqrD3hv42Aa2MnHBHEwok/76N1W1A1KiTcpY8rMiU8AAAB30lEQVRYw+2VaY+aQByHR2c4vAABD2Q9qlXXo3tv24d+/+9Vl2x6BGFAmrRJfd7BjzxM/kdGXLnyv9L2PUuCtDy/LS6g61v8guV3KwrM9QgYeXbYaoW2lz6szSqGpgLmsfnDGM8B1SxvWIzA3f7+buvCaFHWcCORm+zrjUTelGyEZNY+G8yQpVrT6WEMzkcDg15H6OlDnJfF0C9RSljlpyvQl9Sl1y0YuB6uzvAC46J8DC8axRGjWzj3BkeNwqGvq7aj6ShEopAIivvagKZmfaAhigiZmpodnhIWpOF8xjQoVgRTZvPQzBlfixS7yGCTYg1ytouDHSyRw3zDULIM7API9tm5M+K3TYfbfMUtvO17bJyb4QAa+p40f36VrZnCE+UVwkNlQsm4imKMzITQqqJowT+q+AO12ONWUbjsM+EaJuUVE1hnR9dCRmWnM5JYw7OXBM7KVhhFO2Kg7JVDzlWzVaT4ogCfFLXNySd9Ze032ptK9SeiBqbDUtQjhEk9Q2eGqmcYHpgO6p3BhUBU4/Xh44mH1/eG9eBrRcPuLkm5251OsFHZmdHzKUk+nEiSL3MHwFmICxSn/++S5BvAMjLFJYrHp6fHJPnsHaOOuITn5J1ncTH3Scq9uHLlL/AdCVVMpUU7DnwAAAAASUVORK5CYII=) no-repeat center;
                                background-size: 100%;
                            }
                            }
                        .mine-setting__list__item--link{
                            display: block;
                        }
                    }
                }
            }
            }
        }
    /* Loading */
        .loading_bg{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        overflow: hidden;
        background-color: #FFFFFF;
        .loading{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            .loading__pic{
            width: 1.06667rem;
            height: 1.06667rem;
            }
        }
        }
</style>
