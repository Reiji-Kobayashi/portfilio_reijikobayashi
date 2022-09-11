<template>
    <div id="Profile">
        <h2>Profile</h2>

        <Timeline :value="events" align="alternate">
            <template #marker="slotProps">
                <span class="custom-marker shadow-2" :style="{color: slotProps.item.color}">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>

            <template #content="slotProps">
                <Card>
                    <template #title>
                        {{slotProps.item.status}}
                    </template>
                    <template #subtitle>
                        {{slotProps.item.date}}
                    </template>
                    <template #content>
                        {{slotProps.item.text}}
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                {
                    status: '埼玉県立川越高等学校 入学', date: '2013/04', icon: 'pi pi-shopping-cart', color: '#1E90FF',
                    text: '部活動ではゲームプログラミング、自作ロボットによる学校間ロボコン、研究活動を行なっていた。入部以前はプログラミングの経験がなかったが、ゲームプログラミングを通し、プログラミングに対する興味が現れた。'
                },
                { status: '埼玉県立川越高等学校 卒業', date: '2016/03', icon: 'pi pi-shopping-cart', color: '#1E90FF', text: '' },
                { status: '電気通信大学 情報理工学域 入学', date: '2016/04', icon: 'pi pi-shopping-cart', color: '#1E90FF', text: '' },
                {
                    status: '留年', date: '2020/04', icon: 'pi pi-exclamation-circle', color: '#DC143C',
                    text: '4年次の大学院入試が不合格になり、教授・両親との相談を通して留年して大学院入試を再受験することを決意。5年次前学期は大学院入試の勉強に専念し、8月に合格。9月以降は修士の研究のための関連研究の調査やアルバイトを行なった。'
                },
                { status: '電気通信大学 情報理工学域 Ⅰ類 メディア情報学プログラム 卒業', date: '2021/03', icon: 'pi pi-shopping-cart', color: '#1E90FF', text: '' },
                { status: '電気通信大学 情報理工学研究科 情報学専攻 入学', date: '2021/03', icon: 'pi pi-shopping-cart', color: '#1E90FF', text: '' },
            ],
        }
    }
}
</script>
