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

    console.log('itemAtual', itemAtual);
    console.log('itemAtualHover', itemAtualHover);

    $('.thumbs div').removeClass('ativo');
    $('.thumbs div').removeClass('hover');
    $('.bgs div').removeClass('ativo');

    $('.thumbs .item' + itemAtual).addClass('ativo');
    $('.thumbs .item' + itemAtualHover).addClass('hover');
    $('.bgs .item' + itemAtual).addClass('ativo');
}