'use client';
import { useEffect, useState } from 'react';
export function usePersisted<T>(key:string, initial:T) { const [value,setValue]=useState<T>(initial); const [ready,setReady]=useState(false); useEffect(()=>{try{const saved=localStorage.getItem(key);if(saved)setValue(JSON.parse(saved));}catch{}setReady(true)},[key]);useEffect(()=>{if(ready)localStorage.setItem(key,JSON.stringify(value))},[value,key,ready]);return [value,setValue] as const; }
