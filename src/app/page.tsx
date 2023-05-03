export default function Home() {
  return (
    <div className="h-screen w-screen flex-col justify-center items-center">
      <header className="flex justify-around items-center">
        <nav className="bg-zinc-300 px-5 py-2 mt-3 rounded-md">
          <ul className="flex gap-10">
            <li className="cursor-pointer hover:text-violet-500 hover:font-semibold"><a href="./page.tsx"></a>Página inicial</li>
            <li className="cursor-pointer hover:text-violet-500 hover:font-semibold"><a href=""></a>Projetos</li>
            <li className="cursor-pointer hover:text-violet-500 hover:font-semibold"><a href=""></a>Contato</li>
          </ul>
        </nav>
      </header>
      <div className="mt-4 mx-2">
        <main className="bg-zinc-300 rounded-md p-2 flex-col justify-center items-center text-center">
          <h1>TITULO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis itaque exercitationem iure sunt tempora dolor iste maiores sint facere asperiores corporis sequi, totam quidem libero ipsa explicabo illo voluptate.</p>
        </main>
      </div>
      <footer></footer>
    </div>
  )
}
