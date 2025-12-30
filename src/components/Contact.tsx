"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconSend,
  IconBrandFacebook,
  IconBrandInstagram,
  IconChevronDown,
} from "@tabler/icons-react";

const contactInfo = [
  {
    icon: IconMapPin,
    label: "Địa chỉ",
    value:
      "99/6 Trương Thị Hoa, Khu phố 3, Phường Tân Thới Hiệp, Quận 12, Thành phố Hồ Chí Minh",
  },
  {
    icon: IconPhone,
    label: "Điện thoại",
    value: "028 3750 0971",
    href: "tel:02837500971",
  },
  {
    icon: IconMail,
    label: "Email",
    value: "contact@lietviet.vn",
    href: "mailto:contact@lietviet.vn",
  },
  {
    icon: IconClock,
    label: "Giờ làm việc",
    value: "Thứ 2 - Thứ 7: 8:00 - 17:30",
  },
];

interface SelectOption {
  value: string;
  label: string;
}

function ArtisanalSelect({
  options,
  placeholder,
}: {
  options: SelectOption[];
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectOption | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full h-11 px-4 flex items-center justify-between bg-slate-50/50 border rounded-sm cursor-pointer transition-all duration-300 ${
          isOpen ? "border-primary ring-2 ring-primary/5" : "border-slate-200"
        }`}
      >
        {/* Stitched Border Internal */}
        <div className="absolute inset-1 border border-dashed border-slate-200 pointer-events-none rounded-sm" />

        <span
          className={`text-sm relative z-10 ${
            selected ? "text-slate-900 font-bold" : "text-slate-400"
          }`}
        >
          {selected ? selected.label : placeholder}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="relative z-10"
        >
          <IconChevronDown
            className={`w-4 h-4 transition-colors ${
              isOpen ? "text-primary" : "text-slate-400"
            }`}
            stroke={2.5}
          />
        </motion.div>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-white border border-slate-100 shadow-2xl rounded-sm py-2 z-50 overflow-hidden"
          >
            {/* Stitched Border Internal for Menu */}
            <div className="absolute inset-1 border border-dashed border-slate-50 pointer-events-none rounded-sm" />

            <div className="relative z-10 max-h-60 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between group ${
                    selected?.value === option.value
                      ? "bg-primary/5 text-primary font-bold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {option.label}
                  {selected?.value === option.value && (
                    <div className="w-1 h-1 rounded-full bg-primary" />
                  )}

                  {/* Hover visual cue */}
                  <div className="absolute left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="w-full py-10 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Artisanal Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-4">
              Liên hệ
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Kết nối <span className="text-primary italic">trực tiếp</span>{" "}
              <br />
              với xưởng sản xuất
            </h2>
            <p className="text-slate-500 leading-relaxed max-w-xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp dệt kim tối
              ưu nhất cho nhu cầu của bạn. Liên hệ ngay để nhận báo giá chi
              tiết.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info - Asymmetrical Staggered Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group relative p-6 rounded-sm bg-slate-50 border border-slate-100 overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-primary/5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                >
                  {/* Stitched Border */}
                  <div className="absolute inset-1.5 border border-dashed border-slate-200 pointer-events-none rounded-sm" />

                  {/* Corner Threads */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-primary/30 pointer-events-none" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-primary/30 pointer-events-none" />

                  {/* Watermark */}
                  <div className="absolute -bottom-2 -right-2 text-4xl font-black text-slate-200 opacity-20 uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700">
                    {item.label === "Địa chỉ"
                      ? "LOC"
                      : item.label === "Điện thoại"
                      ? "CALL"
                      : item.label === "Email"
                      ? "MAIL"
                      : "TIME"}
                  </div>

                  <div className="relative z-10 flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-sm bg-white flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-500">
                      <item.icon
                        className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-500"
                        stroke={1.5}
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-800 font-bold hover:text-primary transition-colors text-sm break-all lg:break-normal"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-bold text-sm leading-snug">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links - Artisanal Pills */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                Social:
              </span>
              <div className="flex gap-2">
                {[IconBrandFacebook, IconBrandInstagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group"
                  >
                    <Icon
                      className="w-4 h-4 text-slate-400 group-hover:text-white"
                      stroke={1.5}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Framed Map with Skew */}
            <motion.div
              className="relative mt-8 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="absolute -inset-2 border border-dashed border-slate-200 rounded-sm pointer-events-none group-hover:scale-105 transition-transform duration-700" />
              <div className="relative aspect-video rounded-sm bg-slate-100 overflow-hidden shadow-lg lg:-skew-x-1 group-hover:skew-x-0 transition-transform duration-1000">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.951554627192!2d106.6713788!3d10.8653303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529db7123992b%3A0xc6cb1c49988a25a9!2zOTkvNiBUcsawxqFuZyBUaOG7iyBIb2EsIFTDom4gVGjhu5tpIEhp4buHcCwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2svn!4v1714400000000!5m2!1svi!2svn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form - Premium Elevated */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-slate-100 rounded-sm overflow-hidden">
              {/* Decorative stitches inside the form container */}
              <div className="absolute inset-4 border border-dashed border-slate-100 pointer-events-none z-0" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-px bg-primary" />
                  Gửi yêu cầu dệt may
                </h3>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Họ và tên *
                      </label>
                      <Input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        required
                        className="rounded-sm border-slate-200 focus:border-primary transition-all bg-slate-50/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Số điện thoại *
                      </label>
                      <Input
                        type="tel"
                        placeholder="0909 123 456"
                        required
                        className="rounded-sm border-slate-200 focus:border-primary transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Email (Không bắt buộc)
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="rounded-sm border-slate-200 focus:border-primary transition-all bg-slate-50/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Dịch vụ yêu cầu
                    </label>
                    <ArtisanalSelect
                      options={[
                        { value: "ao-thun", label: "Sản xuất Áo thun" },
                        { value: "ao-khoac", label: "Sản xuất Áo khoác" },
                        { value: "dong-phuc", label: "Đồng phục công nhân" },
                        { value: "vai", label: "Cung cấp Vải dệt kim" },
                        { value: "khac", label: "Yêu cầu khác" },
                      ]}
                      placeholder="Chọn loại sản phẩm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Nội dung chi tiết *
                    </label>
                    <Textarea
                      placeholder="Hãy cho chúng tôi biết về số lượng, loại vải hoặc mẫu mã bạn cần..."
                      rows={5}
                      required
                      className="rounded-sm border-slate-200 focus:border-primary transition-all bg-slate-50/50 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-12 rounded-sm bg-slate-900 hover:bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all duration-500 shadow-lg group"
                    >
                      <IconSend className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Gửi yêu cầu báo giá ngay
                    </Button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center font-medium italic">
                    Cam kết phản hồi chuyên nghiệp trong vòng 2 giờ làm việc.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
