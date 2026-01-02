import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      naam: "",
      email: "",
      bericht: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-green-800 dark:text-green-200" data-testid="contact-success-title">
            Bericht Verzonden!
          </h3>
          <p className="text-center text-green-700 dark:text-green-300">
            Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.
          </p>
          <Button
            className="mt-6"
            onClick={() => setIsSuccess(false)}
            data-testid="button-new-contact"
          >
            Nieuw Bericht
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle data-testid="contact-form-title">Stuur Ons een Bericht</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="naam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Naam *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Uw volledige naam"
                      {...field}
                      data-testid="input-contact-naam"
                    />
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
                  <FormLabel>E-mailadres *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="uw@email.nl"
                      {...field}
                      data-testid="input-contact-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bericht"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Uw Bericht *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Schrijf hier uw bericht..."
                      className="min-h-[150px]"
                      {...field}
                      data-testid="input-contact-bericht"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {mutation.isError && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive" data-testid="contact-error">
                Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
              data-testid="button-submit-contact"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verzenden...
                </>
              ) : (
                "Bericht Versturen"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
