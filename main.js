$(document).ready(function setup() {
    $("#calcular_compra").click(function (e) { 
        e.preventDefault();
        const dds = document.querySelectorAll('.produto')
        let presum = []
        let pro = dds.forEach(function fun (item) {
            const nome = item.querySelector('.card-header h4').innerHTML
            const label = item.querySelector('.card-footer')
            const pre_b = parseFloat(label.querySelector('.label-pre .pre').innerHTML)
            const pre = parseFloat(label.querySelector('.qtd .input_tam').value)
            let v = pre_b*pre
            presum.push(v)
        })
        let g = 0
        for (let i = 0; i < presum.length; i++) {
            if (isNaN(presum[i])) {
                
            } else {
                g += presum[i]
            }
        }
        document.querySelector('.pre_tot').innerHTML = g
        console.log(tot)
    });
})