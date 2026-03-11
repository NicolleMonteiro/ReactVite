import CarouselHome from "../components/Carousel"
import Card from "../components/Card"
 
function Home(){
 
return(
 
<div className="container">
 
<CarouselHome/>
 
<h2>Informações</h2>
 
<div className="grid">
 
<Card titulo="Serviço 1" texto="Sistema inteligente de gestão empresarial que organiza tarefas, dados e processos em uma única plataforma." imagem="https://picsum.photos/200?1"/>

<Card titulo="Serviço 2" texto="Plataforma digital desenvolvida para melhorar a comunicação interna e a colaboração entre equipes." imagem="https://picsum.photos/200?2"/>

<Card titulo="Serviço 3" texto="Aplicação web para controle de projetos que permite acompanhar prazos, atividades e desempenho." imagem="https://picsum.photos/200?3"/>

<Card titulo="Serviço 4" texto="Ferramenta tecnológica para análise de dados que ajuda empresas a tomar decisões mais estratégicas." imagem="https://picsum.photos/200?4"/>

<Card titulo="Serviço 5" texto="Sistema de automação de processos que reduz tarefas repetitivas e aumenta a produtividade da equipe." imagem="https://picsum.photos/200?5"/>

<Card titulo="Serviço 6" texto="Plataforma segura de armazenamento em nuvem para acesso rápido e organizado de documentos." imagem="https://picsum.photos/200?6"/>

<Card titulo="Serviço 7" texto="Aplicativo corporativo desenvolvido para facilitar o gerenciamento de clientes e atendimentos." imagem="https://picsum.photos/200?7"/>

<Card titulo="Serviço 8" texto="Sistema de monitoramento digital que acompanha o desempenho de processos em tempo real." imagem="https://picsum.photos/200?8"/>

<Card titulo="Serviço 9" texto="Ferramenta de integração entre diferentes sistemas empresariais, tornando o fluxo de dados mais eficiente." imagem="https://picsum.photos/200?9"/>

<Card titulo="Serviço 10" texto="Plataforma online para gestão de equipes remotas, permitindo organização de tarefas e acompanhamento de resultados." imagem="https://picsum.photos/200?10"/>

<Card titulo="Serviço 11" texto="Sistema inteligente de relatórios que transforma dados em informações claras para análise empresarial." imagem="https://picsum.photos/200?11"/>

<Card titulo="Serviço 12" texto="Aplicação tecnológica focada em segurança digital e proteção de dados corporativos." imagem="https://picsum.photos/200?12"/>
</div>
 
</div>
 
)
 
}
 
export default Home