'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col w-full mx-auto pt-32">
      
      <div className="p-6 mx-auto w-full">
        
        <h1 className="text-center text-3xl font-bold text-orange-500 mb-6">Contact</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name*</label>
            <Input id="name" className="w-full" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
            <Input id="email" type="email" className="w-full" required />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Telephone*</label>
            <Input id="telephone" type="tel" className="w-full" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message*</label>
            <Textarea id="message" className="w-full h-32" required />
          </div>
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>
        </form>

      </div>

      <div className="w-full md:flex items-center justify-between bg-orange-500 text-white p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">HEAD OFFICE</h2>
          <p className="mb-2">Jalan Raya Kartanegara No.85, Ngambon,</p>
          <p className="mb-2">Girimayo, Kec. Karang Ploso, Malang,</p>
          <p className="mb-2">Jawa Timur 65152</p>
          <div className="flex items-center mt-2">
            <PhoneIcon className="mr-2" size={18} />
            <span>(0341) 468500</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">PLANT TANGERANG</h2>
          <p className="mb-2">JI. Raya serang Km. 12, Kampung Cirewed</p>
          <p className="mb-2">RT.3 RW.2, Desa Sukadamai, Cikupa,</p>
          <p className="mb-2">Sukadamai, Kec. Cikupa, Tangerang,</p>
          <p className="mb-2">Banten 15710</p>
          <div className="flex items-center mt-2">
            <PhoneIcon className="mr-2" size={18} />
            <span>(021) 5960599</span>
          </div>
        </div>
      </div>
    </div>
  )
}