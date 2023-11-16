"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Button, Htag, P, Rating, Tag } from '@/components';
import { useState } from 'react';
import { withLayout } from '@/layout/Layuot';
import {MyRating} from "@/components/MyRating/MyRating";

function click() {
  console.log("Click");
}

function Home() {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='l'>Большой</P>
      <P>Средний</P>
      <P size='s'>Маленький</P>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='primary'>Green</Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
        <MyRating rating={rating} setRating={setRating} />
    </>
  )
}

export default withLayout(Home);