"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { programsList } from "./Programs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GradientBlob } from "./ui/GradientBlob";
import Parallax from "./Parallax";

const formSchema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
  phoneNumber: z.string().min(11, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(3, "City is required"),
  houseNo: z.string().min(4, "Full Address is required"),
  postalCode: z.string().min(2, "Postal code is required"),
  program: z.string().min(1, "Program selection is required"),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      city: "",
      houseNo: "",
      postalCode: "",
      program: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    try {
      const studentData = {
        customerDetails: data,
        course: data.program,
      };

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to place order");
      }

      const result = await response.json();
      console.log("Order placed successfully:", result);

      toast({
        title: "Congratulations!",
        description: "Your form has been submitted.",
        duration: 5000,
      });
    } catch (error) {
      console.error("Error placing order:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col overflow-x-clip">
      <Parallax
        className="text-5xl sm+:text-6xl md:text-8xl"
        text="the executor"
        minusTranslateY="-translate-y-44"
      />
      <div className="relative flex flex-col lg:flex-row items-center justify-between py-10 px-10">
        <div className="absolute -left-20 -top-16 opacity-50 -z-10">
          <GradientBlob
            colors={["#f92a2a", "#7a0909", "#0e0f0f"]}
            size={600}
            blur={60}
            duration={15}
          />
        </div>
        <h1 className="font-extrabold text-4xl text-center mb-10 max-w-lg lg:max-w-md">
          Register yourself to
          <br />
          <span className="text-red-500">The Executor </span>
          Martial Arts Academy at affordable prices, or you can first try a free
          Demo Class. Register yourself by filling out our form
          <span className="text-red-500">!</span>
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-xl mx-auto "
          >
            <FormField
              control={form.control}
              name="program"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border border-red-600">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-none border border-red-600 bg-black">
                      {programsList.map((program) => (
                        <SelectItem
                          className="text-white"
                          key={program.id}
                          value={program.name}
                        >
                          {program.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="01234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-between gap-6">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="12345" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="houseNo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Full Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Area, block-1..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="rounded-none w-full mt-7 border border-red-600 bg-black text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {errorMessage && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
