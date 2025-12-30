import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Áo thun dệt kim",
    desc: "Chất liệu cotton, co giãn, thoáng mát, phù hợp đồng phục và thời trang.",
  },
  {
    name: "Áo khoác dệt kim",
    desc: "Đa dạng mẫu mã, bền đẹp, giữ ấm tốt, phù hợp mọi lứa tuổi.",
  },
  {
    name: "Vải dệt kim",
    desc: "Cung cấp vải dệt kim các loại, đáp ứng nhu cầu sản xuất đa dạng.",
  },
];

export default function Products() {
  return (
    <section className="w-full py-16 bg-zinc-50 dark:bg-zinc-900" id="products">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Sản phẩm</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((item, idx) => (
            <Card key={idx} className="shadow-md border-primary/20">
              <CardContent className="py-8">
                <Badge className="mb-2 bg-secondary text-primary">{item.name}</Badge>
                <p className="text-primary/90 dark:text-zinc-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
