import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import App from './App.jsx'
import Servicos from './Paginas/Servicos'
import Home from './Paginas/Home'
import Posts from './Paginas/Posts.jsx';
import PostUnico from './Paginas/PostUnico';
import './index.css'

const posts = [
  {id: 1, title: 'Site da Future Fast'},
  {id: 2, title: 'https://rodrigo3299.github.io/ProjetoFF/'}
];


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {index: true, element: <Home />},
    {
      path: 'servicos',
      element: <Servicos/>,
      children: [
        {index: true, element: <Link to='posts'> Veja nossos projetos</Link>},
        {
          path: 'posts',
          element: <Posts posts={posts} />,
          children: [
            {
              path: ':postName',
              element: <PostUnico />,
            },
          ],
        },
      ],
    },
    ],

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
