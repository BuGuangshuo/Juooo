<template>
    <!-- 票夹 -->
    <div class="my-ticket-list">
        <div class="ticket-list my-ticket-list__list">
            <section class="title ticket-list__title">
                <span class="title__text">票夹</span>
                <div class="title__nav-wrapper ">
                    <div class="title__nav">

                    </div>
                </div>
            </section>
            <div class="ticket-empty">
                <img src="/static/img/ticket_empty.cf4b072.png" alt="" class="ticket-empty__img">
                <div class="ticket-empty__tips">暂无电子票</div>
                <button class="ju-button login ju-button--gradient ju-button--full-round ju-button--middle ju-button--round" @click="$router.push('/login')">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .my-ticket-list{
        height: 100%;
        .ticket-list{
            background: #f5f5f5;
            position: relative;
            height: 100%;
            .ticket-list__title{
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1;
                .title__text{
                    position: absolute;
                    text-align: center;
                    height: 1.17333rem;
                    line-height: 1.17333rem;
                    left: 0;
                    right: 0;
                    pointer-events: none;
                }
                .title__nav-wrapper {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    .title__nav{
                        display: flex;
                        align-items: center;
                        padding-right: 0.2rem;
                    }
                }
            }
            .ticket-empty{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                background: #fefefe;
                .ticket-empty__img{
                    width: 2.90667rem;
                    height: 2.06667rem;
                    margin-top: 4.92rem;
                }
                .ticket-empty__tips{
                    color: #999999;
                    font-size: 0.34667rem;
                    margin-top: 0.58667rem;
                }
                .login{
                    margin-top: 1.33333rem;
                    height: 1.06667rem;
                    width: 3.86667rem;
                    box-shadow: 0px 0.05333rem 0.12rem 1px rgba(255,77,74,0.3);
                }
                .ju-button--middle{
                    height: 1.06667rem;
                    font-size: 0.4rem;
                }
                .ju-button--full-round{
                    border-radius: 26.66667rem;
                }
                .ju-button--gradient {
                    background: linear-gradient(-50deg,#FF4D4A,#FF9A34);
                }
                .ju-button {
                    display: inline-block;
                    line-height: 1;
                    white-space: nowrap;
                    text-align: center;
                    outline: 0;
                    color: #fff;
                    border: none;
                    font-size: 0.4rem;
                    padding: 0 0.4rem;
                    cursor: pointer;
                }
            }
        }
    }
</style>
