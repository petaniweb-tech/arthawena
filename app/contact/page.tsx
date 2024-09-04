"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContacFormSchema } from "@/lib/form-schema"
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
import IcPhone from "@/assets/icons/ic-phone.png";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react"
import { sendEmail } from "../_action"
import DynamicBreadcrumb from "@/components/molecules/dynamic-bradcrumb";
import { useToast } from "@/hooks/use-toast"


export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ContacFormSchema>>({
    resolver: zodResolver(ContacFormSchema),
  })

  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);


  async function onSubmit(values: z.infer<typeof ContacFormSchema>) {
    if (!recaptchaValue) {
      toast({
        title: "Please complete the reCAPTCHA",
      })
      return;
    }

    await sendEmail(values);
    toast({
      title: "Success",
      description: "Thank you for contacting us. We will get back to you as soon as possible.",
    })
    console.log(values);
  }

  return (
    <>
      {/* <-- === Breadcrumb Start === --> */}
      <DynamicBreadcrumb
        backgroundColor="bg-background"
        breadcrumbColor="text-charcoal/50"
        breadcrumbPageColor="text-charcoal"
        fontWeight="font-medium"
        blackFontHover="lg:hover:text-charcoal duration-300"
      />
      {/* <-- === Breadcrumb End === --> */}

      {/* <-- === The content must be placed right here === --> */}
      <div className="flex flex-col w-full">

        <div className="relative lg:pb-36 pb-20 flex items-center justify-center w-full">
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

          <div className="relative z-20 max-w-lg w-full px-content-padding-sm pt-content-padding-top-sm lg:pt-content-padding-top-lg 2xl:pt-content-padding-top-2xl">
            <h1 className="font-aeonik-medium lg:text-center text-5xl text-primary mb-10 lg:mb-20">Contact</h1>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal">Your Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input className="ring-0 border border-charcoal border-opacity-60 rounded-none py-6 focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
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
                        <Input className="ring-0 border border-charcoal border-opacity-60 py-6 rounded-none focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
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
                        <Input className="ring-0 border border-charcoal border-opacity-60 py-6 rounded-none focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
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
                        <Textarea className="ring-0 border border-charcoal border-opacity-60 pt-3 rounded-none focus-visible:ring-offset-0 focus-visible:ring-0" placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!!}
                  onChange={(token: string | null) => setRecaptchaValue(token)}
                />

                <Button className="bg-primary hover:bg-primary rounded-sm px-4" type="submit">Submit</Button>
              </form>
            </Form>

          </div>
        </div>

        <div className="w-full md:flex items-start justify-evenly bg-primary-gradient text-white lg:py-20 py-11 px-content-padding-sm">
          <div className="">
            <h2 className="font-semibold mb-4">PLANT MALANG</h2>
            <p>Jalan Raya Kartanegara No.85, Ngambon,</p>
            <p>Girimayo, Kec. Karang Ploso, Malang,</p>
            <p>Jawa Timur 65152</p>
            <br className="hidden md:block" />
            <div className="flex items-center mt-4">
              <Image
                src={IcPhone}
                alt="phone icon"
                className="mr-3 h-6 w-6"
              />
              <span>(0341) 468500</span>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-4 mt-14 lg:mt-0">PLANT TANGERANG</h2>
            <p>JI. Raya serang Km. 12, Kampung Cirewed</p>
            <p>RT.3 RW.2, Desa Sukadamai, Cikupa,</p>
            <p>Sukadamai, Kec. Cikupa, Tangerang,</p>
            <p>Banten 15710</p>
            <div className="flex items-center mt-4">
              <Image
                src={IcPhone}
                alt="phone icon"
                className="mr-3 h-6 w-6"
              />
              <span>(021) 5960599</span>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
