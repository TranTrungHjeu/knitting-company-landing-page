import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-16 bg-zinc-50 dark:bg-zinc-900" id="faq">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-heading text-3xl font-bold text-primary mb-6">Câu hỏi thường gặp</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Sản phẩm có nhận đặt theo yêu cầu không?</AccordionTrigger>
            <AccordionContent>
              Có, chúng tôi nhận sản xuất, gia công theo mẫu mã, số lượng và yêu cầu riêng của khách hàng.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Chính sách giao hàng và bảo hành?</AccordionTrigger>
            <AccordionContent>
              Chúng tôi giao hàng toàn quốc, hỗ trợ bảo hành sản phẩm lỗi do sản xuất trong vòng 7 ngày.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Liên hệ báo giá như thế nào?</AccordionTrigger>
            <AccordionContent>
              Quý khách vui lòng điền thông tin vào form liên hệ hoặc gọi trực tiếp số hotline trên website để được tư vấn nhanh nhất.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
