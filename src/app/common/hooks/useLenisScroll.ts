import { useContext } from "react";
import { LenisScrollContext } from "@/app/common/contexts/LenisScrollProvider";


export default function useLenisScroll(){
  return useContext(LenisScrollContext)
}