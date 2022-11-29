import React from "react";

const FAQ = () => {
  return (
    <section className="mt-20">
      <div className="container flex flex-col justify-center px-4 py-8 mb-24 mx-auto md:p-8">
        <h2 className="text-2xl mb-8 text-center font-mono font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="w-full border rounded-lg bg-slate-200 hover:bg-slate-400 hover:text-white translate duration-300 ease-in">
            <summary className="px-4 font-mono py-6 text-lg  focus:outline-none focus-visible:ring-violet-400">
              When will I have access to the lectures and assignments?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4">
              Access to lectures and assignments depends on your type of enrollment. If you take a
              course in audit mode, you will be able to see most course materials for free. To
              access graded assignments and to earn a Certificate, you will need to purchase the
              Certificate experience, during or after your audit. If you don't see the audit option:
              The course may not offer an audit option. You can try a Free Trial instead, or apply
              for Financial Aid. The course may offer 'Full Course, No Certificate' instead. This
              option lets you see all course materials, submit required assessments, and get a final
              grade. This also means that you will not be able to purchase a Certificate experience.
            </p>
          </details>
          <details className="w-full border rounded-lg bg-slate-200 hover:bg-slate-400 hover:text-white translate duration-300 ease-in">
            <summary className="px-4 font-mono py-6 text-lg  focus:outline-none focus-visible:ring-violet-400">
              What will I get if I purchase the Certificate?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              When you purchase a Certificate you get access to all course materials, including
              graded assignments. Upon completing the course, your electronic Certificate will be
              added to your Accomplishments page - from there, you can print your Certificate or add
              it to your LinkedIn profile. If you only want to read and view the course content, you
              can audit the course for free.
            </p>
          </details>
          <details className="w-full border rounded-lg bg-slate-200 hover:bg-slate-400 hover:text-white translate duration-300 ease-in">
            <summary className="px-4 font-mono py-6 text-lg  focus:outline-none focus-visible:ring-violet-400">
              Is financial aid available?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Yes. In select learning programs, you can apply for financial aid or a scholarship if
              you can’t afford the enrollment fee. If fin aid or scholarship is available for your
              learning program selection, you’ll find a link to apply on the description page.
            </p>
          </details>
          <details className="w-full border rounded-lg bg-slate-200 hover:bg-slate-400 hover:text-white translate duration-300 ease-in">
            <summary className="px-4 font-mono py-6 text-lg  focus:outline-none focus-visible:ring-violet-400">
              Do you offer a free trial ?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              No, we don't. However, we provide a demo with full functions. You can check out the
              functions freely. Create, manage items and shape the pages your way. Moreover, our
              free installation policy helps define whether Magezon Page Builder works well with
              your site. Not all, we support 30 days money back, view our refund policy here.
            </p>
          </details>
          <details className="w-full border rounded-lg bg-slate-200 hover:bg-slate-400 hover:text-white translate duration-500 ease-in">
            <summary className="px-4 font-mono py-6 text-lg  focus:outline-none focus-visible:ring-violet-400">
              How can I pray for your services ?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              Currently, we only support payment via Paypal if you purchase products on our website.
              However, we will consider other payment methods and notify you of this.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
