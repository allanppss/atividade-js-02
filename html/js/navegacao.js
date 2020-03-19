var itemAtual = 1;
var itemAtualHover = 2;

function next() {
    itemAtual++;
    itemAtualHover++;

    if (itemAtual > 3) {
        itemAtual = 1;
    }

    if (itemAtualHover > 3) {
        itemAtualHover = 1;
    }

    $('.thumbs div').removeClass('ativo hover');
    $('.thumbs .item' + itemAtual).addClass('ativo');
    $('.thumbs .item' + itemAtualHover).addClass('hover');
    

    $('.bgs div').removeClass('ativo');

    $('.txts-bgs div').removeClass('ativo');

    $('.bgs .item' + itemAtual).addClass('ativo');

    $('.txts-bgs .item' + itemAtual).addClass('ativo');
}