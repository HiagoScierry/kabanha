# “KANBANHA”
 A aplicação será um simulador de gerenciamento de tarefas no tipo Kanban. O template do projeto é baseado em Vue 3 com Vite.


## Inicializando projeto em desenvolvimento

```sh
npm install && npm run dev
```

## Grupo 

Alef Biano dos Santos - 2018204781
Davidson Veniali - 2018200005
Hiago Carlos Moreira -  2018207176
Lucas Marques - 2018205014

#### Requisitos 1:
- [x] Sua aplicação terá 3 componentes básicos que corresponderá a cada seção de tarefas: ATIVAS,
EM ANDAMENTO, CONCLUÍDAS;
- [x] A aplicação deverá fornecer a quantidade de tarefas em cada seção e aparecer uma barra de
progresso que mostrará o andamento de cada seção, atualizando-as a cada remanejamento de
tarefas entre as seções. Haverá uma barra de progresso que mostrará o tempo total de atrasos do
projeto, baseado nos atrasos computados nas tarefas concluídas.
- [x] A aplicação permitirá o cadastro de uma tarefa, que terá:  nome do profissional responsável, descrição da mesma, tempo previsto para desenvolvimento da tarefa.
Esta tarefa ficará na seção ATIVAS;
- [x] A aplicação deverá mostrar, de forma destacada, nas tarefas concluídas, qual o tempo de atraso
ou de adiantamento de uma tarefa.
- [x] Os usuários que poderão manipular as tarefas deverão inicialmente serem cadastrados, com o seu
nome e cargo, montando, portanto, uma equipe do projeto;
- [x] É possível editar uma tarefa
- [x] Uma tarefa poderá ser transferida para “Concluída”, calculando-se o tempo total que foi
desenvolvida, a partir do dia/horário que entrou em desenvolvimento, comparando-se com a
data/hora atual marcada para a sua finalização;
- [x] A tarefa poderá ser redirecionada para em andamento, bastando colocar o nome do profissional
que foi designado para ela. Registra-se qual a data e horário que a tarefa entrou em
desenvolvimento;
- [x] Use múltiplos componentes para a sua aplicação, e utilize o esquema de Rotas para navegação
entre eles, sendo o uso das rotas e componentes a cargo de sua avaliação, de acordo com a
proposta para seu projeto.
- [x] Utilize VueX para a passagem de informações entre elementos “pai - filhos” ou entre
componentes distintos sem ancestralidade.


- [ ] Sua aplicação deverá persistir os dados numa base de dados Firebase, recuperando-os,
salvando-os, e temporariamente gerenciando conjuntamente com o LocalStorage