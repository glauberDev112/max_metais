$(document).ready(function setup() {
    let _taxa = 10
    function num(n,c) {
        return parseInt((n)*10**c)/10**c
    }
    $("#calcular_compra").click(function (e) { 
        e.preventDefault();
        const dds = document.querySelectorAll('.produto')
        let presum = []
        let nota = []
        let pro = dds.forEach(function fun (item) {
            const nome = item.querySelector('.card-header h4').innerHTML
            const label = item.querySelector('.card-footer')
            const pre_b = parseFloat(label.querySelector('.label-pre .pre').innerText)
            const pre = parseFloat(label.querySelector('.qtd .input_tam').value)
            let v = pre_b*pre
            
            if (isNaN(v)) {
                
            } else {
                if ( v >= 1) {
                    console.log('nome',nome,'label',label,'pre_b',pre_b,"pre",pre,'v',v)
                nota.push(`<tr>
            <th>${nome}</th><!--Nome do produto-->
            <th>${pre_b}</th><!--Preço/cm-->
            <th>${pre}</th><!--tamanho-->
            <th>${v}</th><!--preço item-->
        </tr>`)
                presum.push(v)
                }
            }
        })
        let g = 0
        for (let i = 0; i < presum.length; i++) {
            if (isNaN(presum[i])) {
                
            } else {
                g += presum[i]
            }
        }
        let r = num(g+(g/100*_taxa),2)
        document.querySelector('.pre_tot').innerHTML = r
        document.querySelector('#total_nota').innerHTML = r
        document.querySelector('#nota').innerHTML = nota.join(`
`)
    })
    $('#negociar').click(function (e) {
        let t = num(_taxa-(_taxa-5)/100*(100/4),3)
        if (t == _taxa) {
            $('#negociar').css('display','none')
        }
        _taxa = t
        document.querySelector('#ganho').innerText = _taxa
    })
})