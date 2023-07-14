window.addEventListener('DOMContentLoaded', function(){
    const a = document.getElementById('A-result');
    const b = document.getElementById('B-result');
    const c = document.getElementById('C-result');
    const d = document.getElementById('D-result');

    const buttons = document.querySelectorAll('input[type="checkbox"]');

    const a_text = document.getElementById('A_switch');
    const b_text = document.getElementById('B_switch');
    const c_text = document.getElementById('C_switch');
    const d_text = document.getElementById('D_switch');

    // タイムアウトID
    let timeoutID;

    let a_roop_num = 0;
    let b_roop_num = 0;
    let c_roop_num = 0;
    let d_roop_num = 0;

    let a_stop = false;
    let b_stop = false;
    let c_stop = false;
    let d_stop = false;

    const tribe_age = ["獣人", "サイボーグ", "エルフ", "魔法使い", "サキュバス", "フェアリー", "天使", "人間", "幼児", "子供", "大人", "老人"];
    const hairdo_gendere = ["姫カット", "ツインテール", "ミディアムウェーブヘア", "ロングストレートヘア", "ボブヘア", "ポニーテール", "ボーイッシュ", "男性", "女性", "中性"];
    const attire_item = ["軍服", "日本刀", "和服", "水着", "体操服", "メイド服", "学生服", "チャイナ服", "パジャマ", "ニットセーター", "レインウェア", "パーカー", "獣耳", "カチューシャ", "花冠", "リボン", "ピアス", "弓矢", "ハンドガン", "帽子", "ヘッドフォン", "包帯", "タバコ", "眼帯", "本", "パフェ", "たこ焼き", "ポッキー", "パソコン"];
    const composition_situation = ["見つめる", "アオリ構図", "秋", "春", "冬", "夏", "雨", "学校", "街中", "深夜", "リラックス", "料理", "食事", "寝転ぶ", "座る", "笑顔", "フカン構図", "水辺", "廃墟", "デスクワーク", "屋上", "窓辺"];

    // 時間を表示する関数
    function roop(){
        a.textContent = tribe_age[a_roop_num];
        b.textContent = hairdo_gendere[b_roop_num];
        c.textContent = attire_item[c_roop_num];
        d.textContent = composition_situation[d_roop_num];

        if (a_roop_num == tribe_age.length - 1){
            a_roop_num = 0;
        } else if(!a_stop) {
            a_roop_num += 1;
        }
        if (b_roop_num == hairdo_gendere.length - 1){
            b_roop_num = 0;
        } else if(!b_stop) {
            b_roop_num += 1;
        }
        if (c_roop_num == attire_item.length - 1){
            c_roop_num = 0;
        } else if(!c_stop) {
            c_roop_num += 1;
        }
        if (d_roop_num == composition_situation.length - 1){
            d_roop_num = 0;
        } else if(!d_stop) {
            d_roop_num += 1;
        }
        timeoutID = setTimeout(roop, 50);
    }

    // ボタンがクリックされたら
    buttons[1].addEventListener('change', () =>{
        a_stop = !a_stop;
        a_text.textContent = a_stop ? "やり直す" : "ストップ";
        a_text.style.background = a_stop ? "linear-gradient(144deg,#57bfff,#19a7ff 50%,#1da1f2 60%,#1a7ee9)" : "linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
    });
    buttons[2].addEventListener('change', () =>{
        b_stop = !b_stop;
        b_text.textContent = b_stop ? "やり直す" : "ストップ";
        b_text.style.background = b_stop ? "linear-gradient(144deg,#57bfff,#19a7ff 50%,#1da1f2 60%,#1a7ee9)" : "linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
    });
    buttons[3].addEventListener('change', () =>{
        c_stop = !c_stop;
        c_text.textContent = c_stop ? "やり直す" : "ストップ";
        c_text.style.background = c_stop ? "linear-gradient(144deg,#57bfff,#19a7ff 50%,#1da1f2 60%,#1a7ee9)" : "linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
    });
    buttons[4].addEventListener('change', () =>{
        d_stop = !d_stop;
        d_text.textContent = d_stop ? "やり直す" : "ストップ";
        d_text.style.background = d_stop ? "linear-gradient(144deg,#57bfff,#19a7ff 50%,#1da1f2 60%,#1a7ee9)" : "linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
    });
    buttons[5].addEventListener('change', () =>{
        a_stop = false;
        b_stop = false;
        c_stop = false;
        d_stop = false;
        a_text.textContent = "ストップ";
        b_text.textContent = "ストップ";
        c_text.textContent = "ストップ";
        d_text.textContent = "ストップ";
        a_text.style.background ="linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
        b_text.style.background ="linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
        c_text.style.background ="linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
        d_text.style.background ="linear-gradient(144deg,#ff8176,#d6473a 50%,#dc483c,#e81f1f)";
    });

    roop();
});