"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "first-principles-workbook-v1";

type Answers = Record<string, string | boolean>;

const lessons = [
  { no: "01", short: "Bản chất", title: "Đừng tối ưu điều chưa đúng" },
  { no: "02", short: "Bóc tách", title: "Đi xuống nền móng" },
  { no: "03", short: "Dựng lại", title: "Thiết kế từ số 0" },
  { no: "04", short: "Quyết định", title: "Chọn bằng bằng chứng" },
  { no: "05", short: "Vận hành", title: "Biến thành hệ điều hành" },
];

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  rows = 3,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (id: string, value: string) => void;
  rows?: number;
}) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <textarea
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(id, event.target.value)}
      />
    </label>
  );
}

function LessonHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="lesson-head">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
    </header>
  );
}

function LessonOne() {
  return (
    <div className="lesson lesson-one">
      <LessonHead
        eyebrow="Trang 01 · Bản chất"
        title="Đừng tối ưu điều chưa đúng."
        lead="First Principles Thinking không phải là hỏi “tại sao?” thật nhiều. Đó là kỷ luật tách điều ta biết khỏi điều ta chỉ quen tin, rồi suy luận lại từ nền móng."
      />

      <div className="definition-card">
        <span className="definition-label">Định nghĩa một câu</span>
        <p>
          <strong>Phân rã vấn đề</strong> đến những sự thật đủ chắc, sau đó <strong>dựng lời giải mới</strong> mà không bị khóa bởi cách cũ.
        </p>
      </div>

      <div className="split-grid">
        <article className="compare-card muted">
          <span className="compare-kicker">Tư duy tương tự</span>
          <h2>“Người ta vẫn làm thế.”</h2>
          <p>Lấy giải pháp có sẵn làm điểm xuất phát và cải tiến quanh nó.</p>
          <div className="path-line">Cách cũ → tốt hơn 10%</div>
        </article>
        <article className="compare-card accent">
          <span className="compare-kicker">Tư duy nguyên lý đầu tiên</span>
          <h2>“Điều gì thật sự đúng?”</h2>
          <p>Lấy sự thật và ràng buộc thật làm điểm xuất phát để mở lại không gian giải pháp.</p>
          <div className="path-line">Sự thật → phương án mới</div>
        </article>
      </div>

      <section className="triad-section">
        <div className="section-title-row">
          <div>
            <p className="micro-label">Ba lớp thường bị trộn lẫn</p>
            <h2>Tách đúng trước khi nghĩ hay</h2>
          </div>
          <span className="formula-chip">Vấn đề = sự thật + giả định + ràng buộc</span>
        </div>
        <div className="triad-grid">
          <article><b>01</b><h3>Sự thật</h3><p>Quan sát hoặc dữ liệu có thể kiểm chứng độc lập.</p><em>“Có 3 quyết định cần chốt.”</em></article>
          <article><b>02</b><h3>Giả định</h3><p>Một niềm tin đang được đối xử như sự thật.</p><em>“Cuộc họp phải đủ 60 phút.”</em></article>
          <article><b>03</b><h3>Ràng buộc</h3><p>Giới hạn thật: luật, thời gian, tiền, vật lý, đạo đức.</p><em>“Hai người chỉ rảnh cùng lúc 20 phút.”</em></article>
        </div>
      </section>

      <aside className="case-strip">
        <span>Case nhanh</span>
        <p><strong>Đáp án cũ:</strong> họp 60 phút hiệu quả hơn.</p>
        <p><strong>Nền móng:</strong> mục tiêu là chốt 3 quyết định với đúng người và đủ dữ kiện.</p>
        <p><strong>Thiết kế lại:</strong> gửi dữ kiện trước, 20 phút chỉ dành cho điểm bất đồng và quyết định.</p>
      </aside>

      <div className="outcome">
        <span>Sau trang này</span>
        <p>Bạn có thể chỉ ra đâu là sự thật, giả định và ràng buộc trong một vấn đề thật — thay vì nhảy ngay vào giải pháp.</p>
      </div>
    </div>
  );
}

function LessonTwo({ answers, setAnswer }: { answers: Answers; setAnswer: (id: string, value: string) => void }) {
  return (
    <div className="lesson">
      <LessonHead
        eyebrow="Trang 02 · Bóc tách"
        title="Đi xuống nền móng."
        lead="Một vấn đề được mô tả sai sẽ tạo ra lời giải đúng cho… sai vấn đề. Hãy bóc bằng quy trình 5 bước, dừng khi mỗi mệnh đề đã đủ chắc để ra quyết định."
      />

      <section className="method-card">
        <div className="method-intro">
          <p className="micro-label">Khung BÓC 5 bước</p>
          <h2>Từ câu chuyện<br />đến cấu trúc</h2>
          <p>Đừng săn tìm “chân lý tuyệt đối”. Hãy tìm nền móng đủ kiểm chứng cho quyết định đang xét.</p>
        </div>
        <ol className="steps-list">
          <li><b>1</b><div><strong>Định đích</strong><span>Kết quả nào cần thay đổi? Đo bằng gì?</span></div></li>
          <li><b>2</b><div><strong>Tách mệnh đề</strong><span>Viết từng điều bạn đang tin thành một câu riêng.</span></div></li>
          <li><b>3</b><div><strong>Gắn nhãn</strong><span>Sự thật, giả định hay ràng buộc?</span></div></li>
          <li><b>4</b><div><strong>Đào nguyên nhân</strong><span>Điều gì khiến mệnh đề này đúng? Bằng chứng nào có thể bác bỏ?</span></div></li>
          <li><b>5</b><div><strong>Chốt nền móng</strong><span>Giữ lại các sự thật tối thiểu quyết định thiết kế.</span></div></li>
        </ol>
      </section>

      <section className="workbook">
        <div className="workbook-head">
          <div><p className="micro-label">Thực hành trên vấn đề thật</p><h2>Bản đồ nền móng</h2></div>
          <span>Tự lưu trên thiết bị</span>
        </div>
        <div className="fields-grid">
          <Field id="problem" label="1. Vấn đề hiện tại" placeholder="Ví dụ: Tôi luôn thiếu thời gian cho việc quan trọng…" value={String(answers.problem || "")} onChange={setAnswer} />
          <Field id="outcome" label="2. Kết quả cần tạo" placeholder="Kết quả quan sát được, có tiêu chí và thời hạn…" value={String(answers.outcome || "")} onChange={setAnswer} />
          <Field id="facts" label="3. Sự thật đã kiểm chứng" placeholder="Dữ liệu, quan sát, điều có thể xác minh…" value={String(answers.facts || "")} onChange={setAnswer} rows={4} />
          <Field id="assumptions" label="4. Giả định đang ẩn" placeholder="Những câu bắt đầu bằng: phải, luôn, không thể, ai cũng…" value={String(answers.assumptions || "")} onChange={setAnswer} rows={4} />
          <Field id="constraints" label="5. Ràng buộc thật" placeholder="Giới hạn nào thật sự không thể bỏ qua trong quyết định này?" value={String(answers.constraints || "")} onChange={setAnswer} />
          <Field id="unknowns" label="6. Điều chưa biết" placeholder="Bạn cần thử hoặc hỏi gì thay vì tiếp tục đoán?" value={String(answers.unknowns || "")} onChange={setAnswer} />
        </div>
      </section>

      <div className="truth-test">
        <div><span>Kiểm tra nền móng</span><h3>Mỗi câu giữ lại phải vượt 3 cửa.</h3></div>
        <ul><li><b>K</b> Kiểm chứng được?</li><li><b>B</b> Có thể bị bác bỏ?</li><li><b>Q</b> Quan trọng với quyết định?</li></ul>
      </div>
    </div>
  );
}

function LessonThree({ answers, setAnswer }: { answers: Answers; setAnswer: (id: string, value: string) => void }) {
  return (
    <div className="lesson">
      <LessonHead
        eyebrow="Trang 03 · Dựng lại"
        title="Thiết kế từ số 0."
        lead="Bóc tách chỉ phá được chiếc hộp cũ. Giá trị thật xuất hiện khi bạn dựng một cơ chế tối thiểu trực tiếp tạo ra kết quả mong muốn."
      />

      <div className="rebuild-flow" aria-label="Quy trình dựng lại giải pháp">
        <article><span>01</span><h3>Đích</h3><p>Kết quả cụ thể</p></article>
        <i>→</i>
        <article><span>02</span><h3>Cơ chế</h3><p>Điều gì tạo ra kết quả?</p></article>
        <i>→</i>
        <article><span>03</span><h3>Phương án</h3><p>Ít nhất 3 cách</p></article>
        <i>→</i>
        <article><span>04</span><h3>Thử nhỏ</h3><p>Bằng chứng rẻ nhất</p></article>
      </div>

      <section className="case-board">
        <div className="case-board-head"><span>Case · Làm việc siêu hiệu quả</span><h2>“Muốn tạo nhiều giá trị hơn, tôi phải làm nhiều giờ hơn.”</h2></div>
        <div className="case-columns">
          <article className="wrong"><span>Phản xạ mặc định</span><p>Kéo dài ngày làm việc, trả lời nhanh hơn, nhồi thêm việc.</p><b>Hệ quả</b><p>Đầu vào tăng nhưng chú ý phân mảnh; chất lượng quyết định giảm.</p></article>
          <article className="root"><span>Nền móng thật</span><p>Giá trị đến từ một số ít đầu ra đúng, có chất lượng, đến đúng lúc.</p><b>Cơ chế</b><p>Chọn đúng việc × tập trung sâu × vòng phản hồi nhanh.</p></article>
          <article className="better"><span>Thiết kế lại</span><p>Chốt 1 đầu ra quan trọng/ngày; chặn 90 phút không gián đoạn; gom giao tiếp thành 2 khung.</p><b>Bằng chứng</b><p>Đầu ra hoàn tất tăng, giờ làm và việc dở dang giảm.</p></article>
        </div>
      </section>

      <section className="workbook compact-workbook">
        <div className="workbook-head"><div><p className="micro-label">Canvas dựng lại</p><h2>Không sửa cách cũ. Vẽ cơ chế mới.</h2></div></div>
        <div className="fields-grid three-fields">
          <Field id="mechanism" label="Cơ chế tối thiểu tạo ra kết quả" placeholder="Nếu bỏ hết hình thức, điều gì bắt buộc phải xảy ra?" value={String(answers.mechanism || "")} onChange={setAnswer} />
          <Field id="options" label="Ba cách khác nhau để tạo cơ chế" placeholder="1…  2…  3… (ít nhất một cách không dựa vào tiền/thời gian thêm)" value={String(answers.options || "")} onChange={setAnswer} />
          <Field id="small-test" label="Thử nghiệm nhỏ nhất trong 48 giờ" placeholder="Hành động rẻ, nhanh, đảo ngược được và tạo bằng chứng…" value={String(answers["small-test"] || "")} onChange={setAnswer} />
        </div>
      </section>

      <aside className="warning-note"><b>Điểm dừng đúng:</b><span>First Principles không có nghĩa tự phát minh mọi thứ. Nếu giải pháp có sẵn đã phù hợp với nền móng và chi phí học lại cao, hãy tái sử dụng có ý thức.</span></aside>
    </div>
  );
}

function LessonFour({ answers, setAnswer }: { answers: Answers; setAnswer: (id: string, value: string) => void }) {
  return (
    <div className="lesson">
      <LessonHead
        eyebrow="Trang 04 · Ra quyết định"
        title="Chọn bằng bằng chứng."
        lead="Quyết định xuất sắc không phải lúc nào cũng đúng. Đó là quyết định có cách đặt vấn đề tốt, dùng bằng chứng tương xứng, giữ được quyền đổi hướng và học nhanh."
      />

      <div className="decision-equation">
        <p>Chất lượng quyết định</p><span>=</span><b>Khung đúng</b><span>×</span><b>Bằng chứng</b><span>×</span><b>Khả năng đảo ngược</b><span>×</span><b>Tốc độ học</b>
      </div>

      <section className="door-grid">
        <article className="door-card blue">
          <span>🔄 Cửa hai chiều</span><h2>Dễ đảo ngược</h2><p>Ra quyết định nhanh với thông tin vừa đủ. Ưu tiên thử nhỏ hơn là tranh luận dài.</p><ul><li>Chọn công cụ cho dự án thử</li><li>Đổi cấu trúc một cuộc họp</li><li>Thử lịch làm việc 1 tuần</li></ul>
        </article>
        <article className="door-card orange">
          <span>→ Cửa một chiều</span><h2>Khó đảo ngược</h2><p>Làm chậm có chủ đích. Kiểm tra giả định, kịch bản xấu và biên an toàn.</p><ul><li>Ký cam kết tài chính lớn</li><li>Quyết định ảnh hưởng sức khỏe</li><li>Thay đổi khó phục hồi uy tín</li></ul>
        </article>
      </section>

      <section className="decision-protocol">
        <div className="protocol-head"><p className="micro-label">Giao thức 15 phút</p><h2>T.R.U.E — quyết định không tự lừa mình</h2></div>
        <div className="protocol-grid">
          <article><b>T</b><h3>Target</h3><p>Ta tối ưu điều gì? Tiêu chí nào là bắt buộc?</p></article>
          <article><b>R</b><h3>Reality</h3><p>Sự thật, giả định, ràng buộc và điều chưa biết?</p></article>
          <article><b>U</b><h3>Upside / downside</h3><p>Giá trị, chi phí, kịch bản xấu và khả năng đảo ngược?</p></article>
          <article><b>E</b><h3>Experiment</h3><p>Bước nào tạo thêm bằng chứng với giá rẻ nhất?</p></article>
        </div>
      </section>

      <section className="workbook compact-workbook">
        <div className="workbook-head"><div><p className="micro-label">Decision memo một trang</p><h2>Quyết định đang chờ bạn</h2></div><span>Viết trước khi họp</span></div>
        <div className="fields-grid">
          <Field id="decision" label="Quyết định cần đưa ra" placeholder="Viết dưới dạng lựa chọn cụ thể, không phải chủ đề chung…" value={String(answers.decision || "")} onChange={setAnswer} />
          <Field id="criteria" label="Ba tiêu chí quan trọng nhất" placeholder="Tiêu chí 1… 2… 3… và điều kiện không thể thỏa hiệp" value={String(answers.criteria || "")} onChange={setAnswer} />
          <Field id="evidence" label="Bằng chứng đang có / còn thiếu" placeholder="Điều gì đã biết? Điều gì chỉ đang đoán?" value={String(answers.evidence || "")} onChange={setAnswer} />
          <Field id="next-step" label="Bước tiếp theo có thể đảo ngược" placeholder="Thử gì, khi nào, đo gì, điều kiện dừng là gì?" value={String(answers["next-step"] || "")} onChange={setAnswer} />
        </div>
      </section>
    </div>
  );
}

const rubricItems = [
  ["rubric-1", "Tôi mô tả vấn đề bằng kết quả, không bằng giải pháp có sẵn."],
  ["rubric-2", "Tôi tách rõ sự thật, giả định, ràng buộc và điều chưa biết."],
  ["rubric-3", "Tôi tạo ít nhất 3 phương án từ cơ chế nền tảng."],
  ["rubric-4", "Tôi chọn một thử nghiệm nhỏ có chỉ số và điều kiện dừng."],
] as const;

function LessonFive({
  answers,
  setAnswer,
  reset,
  download,
}: {
  answers: Answers;
  setAnswer: (id: string, value: string | boolean) => void;
  reset: () => void;
  download: () => void;
}) {
  const score = rubricItems.filter(([id]) => Boolean(answers[id])).length;
  return (
    <div className="lesson">
      <LessonHead
        eyebrow="Trang 05 · Hệ điều hành"
        title="Biến tư duy thành hành vi."
        lead="Bạn không cần dùng First Principles cho mọi việc. Hãy dùng nó ở nơi giả định cũ đang tạo chi phí lớn, quyết định quan trọng hoặc cải tiến nhỏ đã chạm trần."
      />

      <section className="trigger-card">
        <div><p className="micro-label">Bộ kích hoạt</p><h2>Khi nào nên dừng và bóc lại?</h2></div>
        <div className="trigger-grid"><span>“Ai cũng làm vậy.”</span><span>“Không thể khác được.”</span><span>Chi phí tăng, giá trị không tăng.</span><span>Đã tối ưu nhiều nhưng vẫn bế tắc.</span></div>
      </section>

      <section className="week-plan">
        <div className="week-head"><p className="micro-label">Kế hoạch 7 ngày</p><h2>Một vấn đề. Một vòng học.</h2></div>
        <div className="days-grid">
          <article><b>01</b><span>Chọn</span><p>Một vấn đề có chi phí thật.</p></article>
          <article><b>02</b><span>Tách</span><p>Liệt kê mọi điều đang tin.</p></article>
          <article><b>03</b><span>Kiểm</span><p>Tìm bằng chứng và phản chứng.</p></article>
          <article><b>04</b><span>Dựng</span><p>Tạo ba phương án mới.</p></article>
          <article><b>05</b><span>Thử</span><p>Chạy thử nghiệm nhỏ.</p></article>
          <article><b>06</b><span>Đo</span><p>So kết quả với dự đoán.</p></article>
          <article><b>07</b><span>Học</span><p>Giữ, sửa hoặc bỏ giả định.</p></article>
        </div>
      </section>

      <div className="final-grid">
        <section className="rubric-card">
          <div className="rubric-head"><div><p className="micro-label">Tự kiểm bằng bằng chứng</p><h2>{score}/4 hành vi đã có</h2></div><span className={`score-ring score-${score}`}>{score}</span></div>
          <div className="check-list">
            {rubricItems.map(([id, label]) => (
              <label key={id} className="check-row"><input type="checkbox" checked={Boolean(answers[id])} onChange={(event) => setAnswer(id, event.target.checked)} /><span>{label}</span></label>
            ))}
          </div>
          <p className="rubric-note"><b>Mức 1:</b> nhận diện · <b>Mức 2:</b> giải thích · <b>Mức 3:</b> áp dụng · <b>Mức 4:</b> thích nghi dưới áp lực.</p>
        </section>

        <section className="commit-card">
          <p className="micro-label">Cam kết trong 48 giờ</p>
          <Field id="commitment" label="Tôi sẽ áp dụng vào…" placeholder="Vấn đề, thời điểm bắt đầu và người liên quan…" value={String(answers.commitment || "")} onChange={(id, value) => setAnswer(id, value)} rows={3} />
          <Field id="success-evidence" label="Bằng chứng hoàn tất là…" placeholder="Một artifact, dữ liệu hoặc thay đổi hành vi có thể quan sát…" value={String(answers["success-evidence"] || "")} onChange={(id, value) => setAnswer(id, value)} rows={3} />
          <div className="action-row"><button className="primary-action" onClick={download}>Tải workbook</button><button className="text-action" onClick={reset}>Làm lại</button></div>
        </section>
      </div>

      <blockquote className="closing-quote">“Đừng hỏi cách làm cũ có thể tốt hơn bao nhiêu. Hãy hỏi: nếu chỉ giữ lại điều thật sự đúng, ta sẽ xây gì?”</blockquote>
    </div>
  );
}

export default function Home() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setAnswers(JSON.parse(saved));
      const hashPage = Number(window.location.hash.replace("#trang-", ""));
      if (hashPage >= 1 && hashPage <= 5) setPage(hashPage - 1);
    } catch { /* Dữ liệu cũ không hợp lệ thì bắt đầu mới. */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers, hydrated]);

  useEffect(() => {
    window.location.hash = `trang-${page + 1}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement)?.tagName === "TEXTAREA") return;
      if (event.key === "ArrowRight") setPage((value) => Math.min(4, value + 1));
      if (event.key === "ArrowLeft") setPage((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const setAnswer = (id: string, value: string | boolean) => setAnswers((current) => ({ ...current, [id]: value }));

  const completedFields = useMemo(() => Object.values(answers).filter((value) => value === true || (typeof value === "string" && value.trim())).length, [answers]);

  const reset = () => {
    if (window.confirm("Xóa toàn bộ nội dung bạn đã điền và bắt đầu lại?")) {
      setAnswers({});
      localStorage.removeItem(STORAGE_KEY);
      setPage(0);
    }
  };

  const download = () => {
    const labels: Record<string, string> = {
      problem: "Vấn đề", outcome: "Kết quả cần tạo", facts: "Sự thật", assumptions: "Giả định", constraints: "Ràng buộc", unknowns: "Điều chưa biết",
      mechanism: "Cơ chế tối thiểu", options: "Các phương án", "small-test": "Thử nghiệm 48 giờ", decision: "Quyết định", criteria: "Tiêu chí", evidence: "Bằng chứng", "next-step": "Bước tiếp theo",
      commitment: "Cam kết", "success-evidence": "Bằng chứng hoàn tất",
    };
    const body = Object.entries(labels).map(([key, label]) => `${label.toUpperCase()}\n${String(answers[key] || "—")}\n`).join("\n");
    const rubric = `TỰ KIỂM: ${rubricItems.filter(([id]) => Boolean(answers[id])).length}/4 hành vi\n`;
    const blob = new Blob([`FIRST PRINCIPLES — WORKBOOK CÁ NHÂN\n\n${body}${rubric}`], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "first-principles-workbook.txt";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const pages = [
    <LessonOne key="one" />,
    <LessonTwo key="two" answers={answers} setAnswer={setAnswer} />,
    <LessonThree key="three" answers={answers} setAnswer={setAnswer} />,
    <LessonFour key="four" answers={answers} setAnswer={setAnswer} />,
    <LessonFive key="five" answers={answers} setAnswer={setAnswer} reset={reset} download={download} />,
  ];

  return (
    <main className="course-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setPage(0)} aria-label="Về trang đầu"><span className="brand-mark">FP</span><span><b>FIRST PRINCIPLES</b><small>Tư duy từ nền móng</small></span></button>
        <div className="top-progress"><span style={{ width: `${((page + 1) / 5) * 100}%` }} /></div>
        <div className="top-meta"><span>{completedFields} dấu vết học tập</span><b>{String(page + 1).padStart(2, "0")} / 05</b></div>
      </header>

      <aside className="side-nav" aria-label="Mục lục 5 trang">
        <div className="nav-line" />
        {lessons.map((lesson, index) => (
          <button key={lesson.no} className={index === page ? "active" : index < page ? "done" : ""} onClick={() => setPage(index)} aria-current={index === page ? "page" : undefined}>
            <span className="nav-dot">{index < page ? "✓" : lesson.no}</span><span className="nav-copy"><small>{lesson.short}</small><b>{lesson.title}</b></span>
          </button>
        ))}
        <p className="key-hint">← → để chuyển trang</p>
      </aside>

      <div className="page-stage" role="region" aria-live="polite">{pages[page]}</div>

      <footer className="course-footer">
        <button className="previous" onClick={() => setPage((value) => Math.max(0, value - 1))} disabled={page === 0}><span>←</span><small>Trang trước</small></button>
        <div className="mobile-dots">{lessons.map((lesson, index) => <button key={lesson.no} onClick={() => setPage(index)} className={index === page ? "active" : ""} aria-label={`Mở trang ${index + 1}`} />)}</div>
        <button className="next" onClick={() => page < 4 ? setPage(page + 1) : download()}><span><small>{page < 4 ? "Tiếp tục" : "Hoàn tất"}</small><b>{page < 4 ? lessons[page + 1].short : "Tải workbook"}</b></span><i>{page < 4 ? "→" : "↓"}</i></button>
      </footer>
    </main>
  );
}
