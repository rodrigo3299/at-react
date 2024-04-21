import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,Link} from 'react-router-dom'
import App from './App.jsx'
import Servicos from './Paginas/Servicos'
import Home from './Paginas/Home'
import Posts from './Paginas/Posts.jsx';
import PostUnico from './Paginas/PostUnico';
import Contato from './Paginas/Contato1.jsx'
import './index.css'

const posts = [
  
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
        
        ,
        
        {
          path: 'posts',
          element: <Posts posts={posts} />,
          children: [
            {
              path: ':postName',
              element: <PostUnico />,
            },
          
            {
              path: 'contato',
              element: <Contato />,
              children: [
                
              ]
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
