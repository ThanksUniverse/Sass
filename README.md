# Sass - Extensão do CSS
				# Introdução a pré-processadores de CSS :: https://sass-lang.com/
					- SASS (Mais popular/utilizado)
					- Stylus
					- Less
					- PostCSS
					- (Overview de como separar ferramentas)

					~ Transforma o código que você digita em outro para o CSS
					~ Framework: Melhor compreendido pelo programador --- Output>CSS: Melhor compreendido pelo Computador
					~ Facilita o reaproveitamento de código :: Sass é compatível com vários outros frameworks

					# Sass:https://sass-lang.com -- Praticamente mais fácil de escrever	( sass source/stylesheets/index.scss build/stylesheets/index.css ) [ npm install -g sass ] -g = global
					{A idéia do Sass é para facilitar o processo com variáveis $bgColor: #333; e depois colocar isso no valor}[Importar outros SCSS dentro de um para que o sass (folder folder) execute todos em um CSS]

					# Stylus:https://stylus-lang.com -- Quase igual o Sass

					# Less:https://lesscss.org -- Pode ter lógica no código

					# PostCSS:https://postcss.org -- Gostei desse 

			## Preprocessamento
				- Processo de interpretação intermediário -- Antes do arquivo ser interpretado pelo navegador ele passa por um processamento para transformar em um CSS compatível com o navegador
				- Antes do processamento do navegador
				- Provenção de erros (Irão falar caso você escreve algo errado como se fosse um código mesmo)
				- Organização ( Ajuda a organizar o projeto, localizando facilmente arquivos )
				- Reaproveitamento ( Criar uma classe, modal, e reaproveitar em outros projetos )

			## Variáveis
				- Facilitam a customização e reaproveitamento
				- É praticamente o :root mas com melhor performance ( :root {--main-color: hotpink;--pane-padding: 5px 42px;} )

			## Identação / Hierarquia
				- Estruturação de Componentes
				- Herança
				- Evita sobreposição

         ## Processamento
            - Transforma de :
            ```
            .cars {

               h2 {
                  color: red;
               }

               h1 {
                  color: green;
               }

            }
            ```
            -  Para :
            ```
            .cars h2 {
               color: red;
            }

            .cars h1 {
               color: green;
            }
            ```
<!-- ## Partials
- Modularizar o código
- snippets 


## Code Together

1. ter no node instalado
2. instalar o sass (https://sass-lang.com/install):
```
npm install -g sass    
```
3. criar projeto ou clonar o repositório 
4. criar ou alterar arquivo style.scss
5. rodar o comando para processar o css:
```
sass ./scss/style.scss ./css/style.css 
```

6. customizar o projeto 
7. salvar alterações
8. comitar no seu repositório
9. enviar o link do repositório para o portal da EBAC
 -->