"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { formSchema } from "@/lib/form-schema"
import { PhoneIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import BgContact from "@/assets/images/img-contact.png";
import Image from "next/image";



export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex flex-col w-full mx-auto">

      <div className="relative p-6 flex items-center justify-center mx-auto w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src={BgContact}
            alt="Descriptive text for screen readers"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent z-10"></div>

        <div className="relative z-20 pt-28 max-w-lg w-full">
          <h1 className="md:text-center text-3xl text-primary mb-6">Contact</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">Your Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">Email<span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">Telephone <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">Message <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Textarea className="ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-primary" type="submit">Submit</Button>
            </form>
          </Form>

        </div>
      </div>

      <div className="w-full md:flex items-center justify-evenly bg-primary-gradient text-white p-6">
        <div className="mb-8">
          <h2 className="font-semibold mb-4 mt-8">HEAD OFFICE</h2>
          <p>Jalan Raya Kartanegara No.85, Ngambon,</p>
          <p>Girimayo, Kec. Karang Ploso, Malang,</p>
          <p>Jawa Timur 65152</p>
          <div className="flex items-center mt-4">
            <PhoneIcon className="mr-2" size={18} />
            <span>(0341) 468500</span>
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-4 mt-8">PLANT TANGERANG</h2>
          <p>JI. Raya serang Km. 12, Kampung Cirewed</p>
          <p>RT.3 RW.2, Desa Sukadamai, Cikupa,</p>
          <p>Sukadamai, Kec. Cikupa, Tangerang,</p>
          <p>Banten 15710</p>
          <div className="flex items-center mt-4">
            <PhoneIcon className="mr-2" size={18} />
            <span>(021) 5960599</span>
          </div>
        </div>
      </div>
    </div>
  )
}