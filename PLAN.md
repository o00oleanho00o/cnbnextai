# CNB Next AI — Kế hoạch trang chủ

> Trạng thái: bản đề xuất để review. Chưa triển khai giao diện, chưa sửa cấu hình chạy.

## 1. Mục tiêu

Xây dựng một trang chủ duy nhất cho `cnbnextai.com`, định vị CNB Next AI là startup AI và công nghệ thông tin thành lập năm 2025, chuyên xây phần mềm và hệ thống cho các bài toán vận hành thực tế.

Trang phải trả lời nhanh ba câu hỏi:

1. CNB Next AI là ai?
2. Công ty xây được những loại phần mềm/hệ thống nào?
3. Khách hàng nên liên hệ bằng cách nào để bắt đầu một bài toán?

Chatbot, khu vực đăng nhập, CMS, blog và các trang con nằm ngoài phiên bản trang chủ này.

## 2. Thông tin thương hiệu đã xác nhận

- Tên hiển thị: **CNB Next AI**
- Lĩnh vực: AI, phần mềm, hệ thống công nghệ thông tin
- Năm thành lập: **2025**
- Địa chỉ: **Số 7 ngách 86/48, Nghĩa Lộ, Hà Nội**
- Email liên hệ: **anhlq@cnbnextai.com**
- Domain: **cnbnextai.com**
- Runtime mục tiêu: **port 3000**
- Hạ tầng public: domain được đưa ra ngoài qua **Cloudflare**

## 3. Những gì workspace cho thấy công ty đang làm

Các repo được đọc gồm những README cấp dự án và module sản phẩm có ý nghĩa; các README trong `node_modules`, `.venv`, upstream/vendor và cache được loại khỏi suy luận thương hiệu.

### 3.1. Business AI và hệ thống vận hành doanh nghiệp

- **Company OS**: nền tảng Business AI với quotation operations, tender/dossier builder và project documentation có traceability, evidence, approval và audit.
- **AI Systems Lab**: nghiên cứu production AI platform, business control plane, memory/skills, document intelligence, integration platform và runtime có kiểm soát.
- **CNB ERP / ERPNext**: các lớp Vận hành số, Dự toán & Báo giá, CRM bán hàng dự án và Procurement trên ERPNext/Frappe.
- **DH M&E Pricing Hub**: nhập Excel M&E, chuẩn hóa catalog, matching BOQ, rà soát candidate, provenance và xuất báo giá.

### 3.2. AI workflow, agent và tự động hóa

- **Industrial AI Framework**: LLM/agent workflow kết nối thiết bị qua tool có policy, RAG, approval, simulator và safety gate.
- **Zalo Agent**: agent tự host trên Zalo, nhiều account, tool và dashboard.
- **Ambient Voice Agent**: hướng tới developer platform cho agent có identity, realtime voice, memory, tools và physical endpoint.

### 3.3. Kỹ thuật công nghiệp, CAD và tự động hóa

- **CNB Electrical CAD Lab / AICAD**: BOM có cấu trúc, catalog linh kiện, layout tủ điện, validation, schematic projection và xuất DXF/SVG có audit.
- **Cabinet Studio**: editor cấu hình tủ điện, rule engine, BOM và DXF.
- Đây là năng lực khác biệt để truyền thông về việc đưa AI vào quy trình kỹ thuật, không chỉ làm chatbot hoặc demo mô hình.

### 3.4. Sản phẩm AI theo ngành và trải nghiệm người dùng

- **Bài Giảng AI**: studio tạo ảnh, sơ đồ, animation và bài giảng online/offline cho giáo viên.
- **Truyện Của Con**: AI Comic Studio cho trẻ và phụ huynh Việt Nam, có story synthesis, storyboard, reader và publishing boundary.
- **Pema Digital Clinic**: prototype hệ thống vận hành phòng khám, mobile app và tài chính/thủ thuật.
- **AI Short Film Studio / Video Creator**: pipeline tạo video, narration, caption, provenance và quality gates.

### 3.5. Năng lực R&D nền

- Local LLM, RAG, tool calling, context engineering, agent loop, graph/orchestration, evals, tracing và provider abstraction.
- Đây nên được trình bày như năng lực nghiên cứu và nền tảng kỹ thuật, không biến trang chủ thành danh sách repo.

## 4. Định vị và thông điệp đề xuất

### H1 đề xuất

**AI và phần mềm cho những hệ thống quan trọng của doanh nghiệp.**

### Supporting copy

**CNB Next AI xây các sản phẩm và nền tảng kết hợp AI, dữ liệu và quy trình vận hành — từ bài toán nghiệp vụ, tài liệu và báo giá đến hệ thống kỹ thuật, tự động hóa và thiết bị.**

### CTA chính

- `Trao đổi bài toán` → mở email `mailto:anhlq@cnbnextai.com`

### CTA phụ

- `Xem năng lực` → scroll đến section Capabilities

### Từ khóa cần giữ nhất quán

`AI systems`, `software engineering`, `business operations`, `automation`, `industrial intelligence`, `evidence`, `safety`, `traceability`.

Không dùng các lời hứa khó kiểm chứng như “AI thay thế toàn bộ nhân sự” hoặc “tự động hóa 100%”.

## 5. Cấu trúc một trang

### A. Header cố định nhẹ

- Logo chữ **CNB / Next AI** hoặc wordmark tạm nếu chưa có logo chính thức.
- Anchor links: `Năng lực`, `Giải pháp`, `Cách làm`, `Về CNB`.
- Nút email nhỏ ở góc phải.
- Mobile: menu gọn, không chiếm màn hình.

### B. Hero: “Build the next operating layer”

- H1 lớn, ngắn, đặt ngay trong viewport đầu tiên.
- Dòng mô tả nói rõ AI + phần mềm + hệ thống.
- Hai CTA như trên.
- Một visual hero dạng bảng điều khiển/flow system: node nghiệp vụ, dữ liệu, agent, policy và output; dùng CSS/SVG hoặc asset nội bộ, không dùng ảnh stock trừ khi có nguồn rõ ràng.
- Một dòng tín hiệu nhỏ: `Founded 2025 · Hanoi, Vietnam · AI systems & software`.

### C. Capability grid

6 nhóm năng lực, mỗi item có icon và một câu mô tả:

1. **Business AI & Company OS** — hệ thống nghiệp vụ, approval, evidence và audit.
2. **ERP / CRM / Operations** — vận hành, dự án, báo giá, procurement và CRM.
3. **AI Agents & Automation** — agent có tools, memory, policy và human approval.
4. **Industrial & Engineering Systems** — CAD, BOM, thiết bị, simulator và safety.
5. **Document & Data Intelligence** — PDF/XLSX/DOCX, extraction, normalization và provenance.
6. **AI Product Studio** — sản phẩm giáo dục, sáng tạo, media và vertical software.

### D. Solution bands

Ba dải nội dung rộng, dùng để khách hàng tự nhận ra bài toán của mình:

- **Từ dữ liệu rời rạc đến quy trình có thể kiểm soát**
- **Từ workflow thủ công đến hệ thống có AI hỗ trợ**
- **Từ prototype đến sản phẩm có runtime, quan sát và tiêu chí chất lượng**

Mỗi dải có một diagram nhỏ hoặc metric placeholder; không dùng số liệu kinh doanh khi chưa có dữ liệu được duyệt.

### E. Proof / selected work

Hiển thị 4 case study dạng editorial, ưu tiên năng lực có bằng chứng trong workspace:

- Company OS / Quotation Operations
- Industrial AI / production cell
- CNB Electrical CAD / Cabinet Studio
- Bài Giảng AI hoặc Truyện Của Con

Mỗi case chỉ cần: vấn đề, hệ thống đã xây, năng lực thể hiện. Gắn nhãn `R&D`, `Prototype` hoặc `Product` để không gây nhầm trạng thái thương mại.

### F. Cách làm

Quy trình 4 bước:

1. **Understand** — hiểu nghiệp vụ, dữ liệu, ràng buộc và rủi ro.
2. **Model** — biến bài toán thành domain model, workflow và contract rõ ràng.
3. **Build** — dựng slice chạy được với UI, API, AI boundary và guardrails.
4. **Prove** — test, trace, review và đo luồng dùng đại diện trước khi mở rộng.

### G. About / trust

- Thành lập năm 2025.
- Hà Nội, Việt Nam.
- Tập trung vào phần mềm và hệ thống có thể vận hành, kiểm chứng và mở rộng.
- Nhấn mạnh nguyên tắc: AI đề xuất, hệ thống giữ tính đúng đắn và con người giữ quyền quyết định ở điểm quan trọng.

### H. Contact CTA

Headline: **Có một quy trình cần biến thành hệ thống?**

- Email: `anhlq@cnbnextai.com`
- Địa chỉ: `Số 7 ngách 86/48, Nghĩa Lộ, Hà Nội`
- Nút `Bắt đầu trao đổi` dùng `mailto:`.

### I. Footer

- CNB Next AI
- `Founded 2025 · Hanoi, Vietnam`
- Email, địa chỉ, copyright.
- Không hiển thị thông tin chưa được xác nhận như số điện thoại, mã số thuế, mạng xã hội hoặc lời chứng thực.

## 6. Visual direction

Phong cách thị giác: trang tối, typography lớn, bố cục như một digital studio, chuyển động có chủ đích và các khối nội dung rõ ràng. Giao diện giữ bản sắc CNB Next AI, không phụ thuộc vào thương hiệu hoặc tài sản của bên thứ ba.

- Nền: graphite/near-black, có các dải surface khác nhau để tạo chiều sâu.
- Màu nhấn: đỏ đất/coral trầm trên nền than và trắng ngà; dùng tiết chế để giữ cảm giác công nghệ nhưng không lòe loẹt.
- Typography: sans display đậm cho heading, sans dễ đọc cho body, letter spacing bằng 0.
- Shape: card tối đa 8px radius; section chính là layout phẳng, card chỉ dùng cho case/capability lặp lại.
- Motion: reveal theo scroll, line/beam chuyển động nhẹ, hover state rõ; hỗ trợ `prefers-reduced-motion`.
- Texture: ảnh thật được xử lý đơn sắc nhẹ, đường viền mảnh và nhãn hệ thống ngắn; không vẽ đường/nút lên ảnh và không dùng blob gradient.
- Responsive: mobile-first, hero không bị cắt, card không làm tràn ngang, CTA luôn chạm được.

## 7. Kiến trúc kỹ thuật đề xuất

### Stack

- React + Vite + TypeScript.
- CSS module hoặc CSS thuần có biến thiết kế; ưu tiên cấu trúc đơn giản cho một trang.
- Lucide React cho icon nếu dependency hiện có hoặc được thêm trong lúc triển khai.
- Nội dung tĩnh gom trong `src/content/site.ts` để chỉnh copy không phải sửa layout.

### Cấu trúc thư mục dự kiến

```text
src/
  App.tsx
  main.tsx
  content/site.ts
  components/
    SiteHeader.tsx
    Hero.tsx
    CapabilityGrid.tsx
    SolutionBands.tsx
    SelectedWork.tsx
    Process.tsx
    ContactSection.tsx
    SiteFooter.tsx
  styles/
    tokens.css
    global.css
    sections.css
public/
  media/
```

### Runtime và Cloudflare

- Dev server chạy port `3000`.
- Build tạo static assets để phục vụ qua hosting/origin hiện tại.
- Cloudflare chỉ cần proxy domain tới origin đang phục vụ app; plan không thay đổi DNS, tunnel hoặc secret.
- Không đưa API key vào frontend. Phiên bản trang chủ này không cần backend.

### SEO và metadata

- `<title>`: `CNB Next AI — AI, phần mềm và hệ thống cho doanh nghiệp`.
- Meta description bằng tiếng Việt, mô tả AI systems/software tại Hà Nội.
- Open Graph image nội bộ, favicon/wordmark khi có asset chính thức.
- Semantic landmarks: `header`, `main`, `section`, `footer`; một H1 duy nhất.

## 8. Trình tự triển khai sau khi plan được duyệt

1. Khởi tạo hoặc xác nhận scaffold React/Vite trong `D:\cnbnextai.com`.
2. Tạo design tokens, typography, layout container và breakpoint.
3. Dựng header + hero + capability grid.
4. Thêm solution bands, selected work, process, contact và footer.
5. Thêm motion, hover, reduced-motion và mobile layout.
6. Bổ sung metadata/OG, favicon và asset nội bộ.
7. Chạy build và dev server trên port 3000.
8. Kiểm tra desktop/mobile bằng browser, chụp screenshot, kiểm tra console và link email.
9. Chỉ sau khi nghiệm thu mới cân nhắc form liên hệ server-side hoặc trang con.

## 9. Tiêu chí nghiệm thu

- Trang chủ mở được trên `http://localhost:3000`.
- Domain public hiện tại không bị ảnh hưởng bởi thay đổi local.
- Hero thể hiện rõ CNB Next AI là startup AI/software/systems, thành lập 2025.
- Có đủ 6 nhóm năng lực và 4 case study được gắn nhãn trạng thái.
- Email và địa chỉ xuất hiện ở contact/footer; click email mở đúng `anhlq@cnbnextai.com`.
- Không còn bất kỳ UI, copy, endpoint hay dependency chatbot nào trong phạm vi trang chủ.
- Responsive tốt ở desktop, tablet và mobile; không tràn ngang hoặc chồng chữ.
- Keyboard navigation, focus state, màu tương phản và reduced-motion hoạt động.
- `npm run build` thành công; không có lỗi console nghiêm trọng khi mở trang.
- Không có secret, dữ liệu khách hàng thật hoặc claim thương mại chưa được duyệt.

## 10. Các điểm cần xác nhận trước khi code

1. Logo chính thức và brand guideline đã có chưa? Nếu chưa, dùng wordmark text `CNB Next AI` trong V1.
2. Có muốn đưa số điện thoại, LinkedIn, Facebook hoặc Zalo vào footer không?
3. Bốn case study được phép công khai đến mức nào? Có cần thay tên sản phẩm bằng mô tả ẩn danh không?
4. Cloudflare đang trỏ tới process Node trên máy chủ hay tới một static host? Cần xác nhận trước bước deploy, không ảnh hưởng bước dựng local.

