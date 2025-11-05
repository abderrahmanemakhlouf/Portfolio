"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const res = await SendEmail(formData);

    setLoading(false);

    if (res?.error) {
      setStatus("❌ Failed to send message. Please try again.");
    } else {
      setStatus("✅ Message sent successfully!");
      e.currentTarget.reset();
    }
  };

  return (
    <Card className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="icon_underline text-2xl">Send me a mail</CardTitle>
          <CardDescription>
            Fill in your details and message below, then hit submit.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="SenderEmail">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              name="message"
              required
              placeholder="Your message here..."
              className="resize-none min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-2">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
          {status && (
            <p
              className={`text-center text-sm ${
                status.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
