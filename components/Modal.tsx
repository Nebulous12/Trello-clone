'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useBoardStore } from '@/store/BoardStore'
import { useModalStore } from '@/store/ModalStore'
import TaskTypeRadioGroup from './TaskTypeRadioGroup'
function Modal() {
  const [newTaskInput, setNewTaskInput] = useBoardStore((state)=> [state.newTaskInput, state.setNewTaskInput]);
  const [isOpen, closeModal] = useModalStore((state)=>[state.isOpen, state.closeModal]);

  return (
   
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as = "form"
        className="relative z-10  "
      onClose={closeModal}>
        <div className='fixed inset-0 overflow-y-auto' >
            <div className= 'flex min-h-full items-center justify-center p-4 text-center' >
            <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        {/*  */}
        {/* <TaskTypeRadioGroup/> */}

         <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg0white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 pb-2 ">
              Add a task
               </Dialog.Title>
          <div className='mt-2' >
              <input type="text" value = {newTaskInput}
              onChange = {(e)=> setNewTaskInput(e.target.value)}
              placeholder='Enter a task here...' className='w-full border-gray-300 rounded-md outline-none p-5 '    />
          </div>

          <TaskTypeRadioGroup/> 
         </Dialog.Panel>
        </Transition.Child>
            </div>
        </div>
       
      </Dialog>
    </Transition>
  )
}

export default Modal;