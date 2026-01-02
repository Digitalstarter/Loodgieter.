import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { insertOfferteSchema, type InsertOfferte, cities } from "@shared/schema";

interface OfferteFormProps {
  defaultCity?: string;
}

export function OfferteForm({ defaultCity }: OfferteFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<InsertOfferte>({
    resolver: zodResolver(insertOfferteSchema),
    defaultValues: {
      naam: "",
      telefoon: "",
      email: "",
      stad: defaultCity || "",
      bericht: "",
      privacyAkkoord: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertOfferte) => {
      return apiRequest("POST", "/api/offerte", data);
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
    },
  });

  const onSubmit = (data: InsertOfferte) => {
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-green-800 dark:text-green-200" data-testid="offerte-success-title">
            Offerte Aanvraag Verzonden!
          </h3>
          <p className="text-center text-green-700 dark:text-green-300">
            Bedankt voor uw aanvraag. Wij nemen zo spoedig mogelijk contact met u op.
          </p>
          <Button
            className="mt-6"
            onClick={() => setIsSuccess(false)}
            data-testid="button-new-offerte"
          >
            Nieuwe Aanvraag
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle data-testid="offerte-form-title">Vraag een Gratis Offerte Aan</CardTitle>
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
                      data-testid="input-offerte-naam"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="telefoon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefoonnummer *</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="06 12345678"
                        {...field}
                        data-testid="input-offerte-telefoon"
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
                        data-testid="input-offerte-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="stad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stad *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-offerte-stad">
                        <SelectValue placeholder="Selecteer uw stad" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city.slug} value={city.name}>
                          {city.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="Anders">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bericht"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Omschrijving van uw probleem *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Beschrijf hier uw loodgietersprobleem of de gewenste werkzaamheden..."
                      className="min-h-[120px]"
                      {...field}
                      data-testid="input-offerte-bericht"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyAkkoord"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "true"}
                      onCheckedChange={(checked) => field.onChange(checked ? "true" : "")}
                      data-testid="checkbox-offerte-privacy"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      Ik ga akkoord met het{" "}
                      <a href="#" className="text-primary underline">
                        privacybeleid
                      </a>{" "}
                      *
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {mutation.isError && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive" data-testid="offerte-error">
                Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}
              data-testid="button-submit-offerte"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verzenden...
                </>
              ) : (
                "Offerte Aanvragen"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
