import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="w-full py-16 bg-white dark:bg-black" id="contact">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Liên hệ</h2>
        <Card className="border-primary/30">
          <CardContent className="py-8">
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder="Họ và tên" required />
              <Input type="email" placeholder="Email" required />
              <Textarea placeholder="Nội dung liên hệ" rows={4} required />
              <Button type="submit" className="w-full">Gửi liên hệ</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
