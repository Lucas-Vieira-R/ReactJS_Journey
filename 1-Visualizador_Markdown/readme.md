# Visualizador de Markdown ! 


### Meu primeiro projeto React, ainda bem simples. :)

![GIF](img/gif.gif)

Esse projeto usa CDN do React e do Babel direto no HTML para compilar o JSX em javascript, já que o fiz ainda no formato HTML, CSS e JS! Além disso ele utiliza a biblioteca Marked.js para converter a string recebida do input, para Markdown através da função `marked.parse()` direto na tag de resposta:

```
<div id='preview' dangerouslySetInnerHTML={{ __html: marked.parse(this.state.text,{breaks: true})}}></div>
```

Aqui como podemos ver ainda utilizava os componentes de classe e o `this.state` para controlar o input.
O input controlado é feito ao lidar com eventos `onChange()` dentro da `<textarea />`.

Dentro do evento `onchange()` passamos uma função definida, `handleChange(event)` que pega o novo valor digitado através do `event.target.value` e usa o `this.setState(event)` para atualizar o estado e automaticamente renderizá-lo também no campo de resposta. 

Saber construir inputs controlados e lidar com eventos e states com o React é uma base usada basicamente em todo projeto dinâmico, e nesse projeto consolidei algo que usaria em todos os outros. (E eu lembro que foi até que um pouco complexo quando o fiz, hoje em dia isso já é feijão com arroz kkkk) (Sério eu fui parar no stackoverflow quando ele ainda não era extremamente tóxico para iniciantes como é hoje).

**Um detalhe importante é esse `dangerouslySetInnerHTML` que acaba se tornando uma vulnerabilidade já que codigo malicioso pode ser passado pelo cliente, hoje eu trataria o input antes de passá-lo para a função `marked.parse()`*.

Mas enfim esse foi meu primeiro projeto e eu lembro de ter ficado tremendamente feliz com o resultado, ah a mágica do React!!


## O Design:  

![printscreen](img/printscreen.png)  
  





