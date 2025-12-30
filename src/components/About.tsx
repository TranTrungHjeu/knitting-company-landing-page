import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section className="w-full py-16 bg-white dark:bg-black" id="about">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Giới thiệu</h2>
        <Card className="max-w-3xl mx-auto border-primary/30">
          <CardContent className="py-8">
            <p className="text-lg text-primary/90 dark:text-zinc-300 mb-4">
              <Badge className="mb-2 bg-secondary text-primary">Uy tín - Chất lượng</Badge>
              Công ty TNHH Dệt Kim Liên Việt là đơn vị chuyên sản xuất, gia công các sản phẩm dệt kim như áo thun, áo khoác, đồng phục, vải dệt kim... với nhiều năm kinh nghiệm và đội ngũ nhân sự lành nghề.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              Chúng tôi cam kết mang đến sản phẩm chất lượng, giá cả cạnh tranh và dịch vụ tận tâm cho khách hàng trong và ngoài nước.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
