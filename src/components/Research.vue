<template>
    <div id = "Research">
        <Fieldset legend = "Abstract" :toggleable="true">

        </Fieldset>

        <Fieldset legend = "Introduction" :toggleable="true">
            現在の移動ロボットの操縦方法として，コントローラー等の端末の入力による操縦、自律運転、人物の追従による操縦が挙げられるが、これらの手法には以下の問題点がある。
            <ul>
                <li>入力操縦：操縦者のスキルが必要</li>
                <li>入力操縦：その場で指定した経路への移動が難しい</li>
                <li>入力操縦：機体が操縦者の視界にある必要がある状況では不適</li>
            </ul>

            本研究ではこれらを解決するため、
            <ul>
                <li>人間と機体の位置に基づき</li>
                <li>端末を使用せずに</li>
                <li>後方から機体を操縦する</li>
            </ul>
            新たな操縦方法の提案を行なった。
        </Fieldset>
    </div>


</template>