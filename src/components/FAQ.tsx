"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconHeadset } from "@tabler/icons-react";

const faqs = [
  {
    question: "Sản phẩm có nhận đặt theo yêu cầu không?",
    answer:
      "Có, chúng tôi nhận sản xuất, gia công theo mẫu mã, số lượng và yêu cầu riêng của khách hàng. Bạn có thể gửi mẫu thiết kế hoặc mô tả yêu cầu, chúng tôi sẽ tư vấn và báo giá chi tiết.",
  },
  {
    question: "Số lượng đặt hàng tối thiểu là bao nhiêu?",
    answer:
      "Tùy thuộc vào loại sản phẩm, số lượng tối thiểu thường từ 50-100 sản phẩm. Với đơn hàng lớn, chúng tôi có chính sách giá ưu đãi hấp dẫn.",
  },
  {
    question: "Thời gian sản xuất mất bao lâu?",
    answer:
      "Thời gian sản xuất trung bình từ 7-15 ngày tùy theo số lượng và độ phức tạp của sản phẩm. Với đơn hàng gấp, chúng tôi có thể hỗ trợ rút ngắn thời gian.",
  },
  {
    question: "Chính sách giao hàng và bảo hành?",
    answer:
      "Chúng tôi giao hàng toàn quốc, miễn phí vận chuyển với đơn hàng từ 5 triệu đồng tại TP.HCM. Bảo hành sản phẩm lỗi do sản xuất trong vòng 7 ngày.",
  },
  {
    question: "Có hỗ trợ in/thêu logo không?",
    answer:
      "Có, chúng tôi hỗ trợ in lụa, in chuyển nhiệt, thêu vi tính logo theo yêu cầu với chi phí hợp lý và chất lượng cao.",
  },
  {
    question: "Liên hệ báo giá như thế nào?",
    answer:
      "Quý khách có thể điền form liên hệ trên website, gọi hotline 028 3750 0971, hoặc nhắn tin qua Zalo để được tư vấn và báo giá nhanh nhất.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full py-10 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Những thắc mắc phổ biến nhất của khách hàng về sản phẩm và dịch vụ
            của chúng tôi
          </p>
        </motion.div>

        {/* FAQ Accordion - Artisanal Style */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Background Watermark */}
          <div className="absolute -top-10 -right-10 text-9xl font-black text-slate-100 opacity-50 pointer-events-none select-none tracking-tighter uppercase z-0">
            Q&A
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4 relative z-10"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="group relative bg-white rounded-sm border border-slate-100 shadow-sm px-6 data-[state=open]:shadow-md transition-all duration-300"
              >
                {/* Internal Stitched Border */}
                <div className="absolute inset-1.5 border border-dashed border-slate-50 pointer-events-none rounded-sm" />

                <AccordionTrigger className="text-left text-slate-900 font-bold hover:no-underline py-6">
                  <span className="flex items-center gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-sm bg-slate-50 border border-slate-100 flex items-center justify-center text-primary text-xs font-black group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 pb-6 pl-12 leading-relaxed text-sm">
                  <div className="pt-2 border-t border-slate-50">
                    {faq.answer}
                  </div>
                </AccordionContent>

                {/* Corner Thread Detail */}
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-primary/10 pointer-events-none" />
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-xl shadow-sm px-6 py-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <IconHeadset className="w-6 h-6 text-primary" stroke={1.5} />
            </div>
            <div className="text-left">
              <p className="text-sm text-slate-500">Cần hỗ trợ thêm?</p>
              <a
                href="#contact"
                className="text-primary font-medium hover:underline"
              >
                Liên hệ ngay với chúng tôi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
