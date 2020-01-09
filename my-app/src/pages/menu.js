import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function Menu() {
  const [itens1, setItens1] = useState([]);
  const [itens2, setItens2] = useState([]);
  const [menu, setMenu] = useState();

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('menu')
      .where('breakfast', '==', true)
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
          setItens1(products)
        })
    return () => unsubscribe()

  }, [])

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('menu')
      .where('allday', '==', true)
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
          setItens2(products)
        })
    return () => unsubscribe()

  }, [])

  return (
    <div>
      <h1>Cardápio</h1>
      <button className='menu-options' onClick={() => setMenu(true)}>Breakfast</button>
      <button className='menu-options' onClick={() => setMenu(false)}>All Day</button>

        {menu ? 

        <div>{itens1.map((item) => 
          <div key={item.id}>     
            <button className='add-btn'>
            <div className='itens'>{item.name}
            <div className='price-itens'>{item.price} reais</div> 
            </div> 
            Adicionar
            </button>  
          </div>)};
        </div> 

        : 

        <div>

        <div><h2>Hambúrgueres</h2>
          {itens2.map((item) => 
            item.type === 'burger' ?
            <div key={item.id}>      
            <button className='add-btn'>
              <div className='itens'>{item.name}
              <div className='price-itens'>{item.price} reais</div> 
              </div> 
              Adicionar
            </button>
            </div>

            : false
          )}
        </div>

        <div><h2>Bebidas</h2>
          {itens2.map((item) => 
            item.type === 'drink' ?
            <div key={item.id}>      
            <button className='add-btn'>
              <div className='itens'>{item.name}
              <div className='price-itens'>{item.price} reais</div> 
              </div> 
              Adicionar
            </button>
            </div>

            : false
          )}
          </div>

        <div><h2>Acompanhamentos</h2>
          {itens2.map((item) => 
            item.type === 'acomp' ?
            <div key={item.id}>      
            <button className='add-btn'>
              <div className='itens'>{item.name}
              <div className='price-itens'>{item.price} reais</div> 
              </div> 
              Adicionar
            </button>
            </div>

            : false
          )}
          </div>

        </div>
        }
    </div>
  )}
       
export default Menu;