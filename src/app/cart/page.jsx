"use client"

import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function CarrinhoPage() {
    const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='max-w-4xl mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold mb-6 text-center'>🛒 Carrinho de Compras</h1>

            {cart.length === 0 ? (
                <div className='text-center text-gray-400'>
                    <p className='text-lg'>Seu carrinho está vazio.</p>
                    <Link href="/">
                        <span className='text-pink-500 hover:underline mt-4 block'>
                            Voltar para a loja
                        </span>
                    </Link>
                </div>
            ) : (
                <>
                    <ul className='space-y-6'>
                        {cart.map((item) => (
                            <li
                                key={item._id}
                                className='flex flex-col md:flex-row justify-between md:items-center border border-gray-700 rounded-lg p-4 shadow-sm bg-white/5'
                            >
                                <div className='mb-4 md:mb-0'>
                                    <p className='text-xl font-semibold text-pink-400'>{item.name}</p>
                                    <p className='text-sm text-gray-300'>Quantidade: <span className='font-medium'>{item.quantity}</span></p>
                                    <p className='text-sm text-gray-300'>Preço total: <span className='font-medium'>R$ {(item.price * item.quantity).toFixed(2)}</span></p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item._id)}
                                    className='text-sm text-red-500 hover:underline hover:text-red-600 transition cursor-pointer'
                                >
                                    Remover
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className='mt-10 border-t border-gray-600 pt-6 text-right'>
                        <p className='text-lg font-bold text-gray-200'>
                            Total: <span className='text-pink-400'>R$ {total.toFixed(2)}</span>
                        </p>

                        <div className='flex flex-col sm:flex-row justify-end gap-4 mt-6'>
                            <button
                                onClick={clearCart}
                                className='bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition cursor-pointer'
                            >
                                Limpar Carrinho
                            </button>

                            <button
                                className='bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition cursor-pointer'
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
