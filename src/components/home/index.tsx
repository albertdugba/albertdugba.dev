"use client";
import React, { forwardRef } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { ProfileInfo } from "../profile";

type LogEntry = {
  id: number;
  level: string;
  message: string;
  since: string;
  timestamp: string;
};

const LogsStream = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [status, setStatus] = useState("connecting");

  const endpoint = useMemo(() => {
    return new URL(
      "/api/logs",
      typeof window === "undefined"
        ? "http://localhost:3000"
        : window.location.origin,
    ).href.concat("?since=week");
  }, []);

  useEffect(() => {
    const source = new EventSource(endpoint);

    const handleLog = (event: MessageEvent) => {
      try {
        const payload: LogEntry = JSON.parse(event.data);
        setLogs((prev) => [payload, ...prev].slice(0, 20));
      } catch {
        console.warn("unable to parse log payload");
      }
    };

    const handleDone = () => setStatus("complete");
    const handleOpen = () => setStatus("streaming");
    const handleError = () => setStatus("error");

    source.addEventListener("log", handleLog);
    source.addEventListener("done", handleDone);
    source.addEventListener("open", handleOpen);
    source.addEventListener("error", handleError);

    return () => {
      source.removeEventListener("log", handleLog);
      source.removeEventListener("done", handleDone);
      source.removeEventListener("open", handleOpen);
      source.removeEventListener("error", handleError);
      source.close();
    };
  }, [endpoint]);

  return (
    <section className='max-w-3xl mx-auto my-16 space-y-4'>
      <h2 className='text-2xl font-semibold'>Live logs</h2>
      <p className='text-sm text-secondary'>
        Connection status: <span className='font-mono'>{status}</span>
      </p>
      <div className='border rounded-md p-4 bg-slate-900/70 text-white space-y-3'>
        {logs.length === 0 && <p>No logs received yet.</p>}
        {logs.map((log) => (
          <article
            key={log.id}
            className='rounded-md border border-white/10 p-3 bg-white/5 text-sm space-y-1'
          >
            <p className='font-semibold'>{log.message}</p>
            <p className='text-xs text-secondary'>ID: {log.id}</p>
            <p className='text-xs text-secondary'>
              {log.level} · {log.since}
            </p>
            <p className='text-xs text-secondary'>{log.timestamp}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export const HomePage = () => {
  const ExoticImage = forwardRef<HTMLImageElement, ImageProps>(
    function ExoticImageWrapper(props, ref) {
      return <Image {...props} ref={ref} alt='Image site' />;
    },
  );

  const MotionImage = motion(ExoticImage);

  const imageVariants = {
    initial: {
      rotate: "34deg",
      backgroundColor: "var(--lemonColor)",
    },
    animate: {
      rotate: "-12deg",
      backgroundColor: "var(--lemonColor)",
    },
  };

  return (
    <div>
      <div className='relative h-[90%] max-w-6xl lg:mt-16 mx-auto flex items-center justify-center'>
        <div className='flex lg:flex-row flex-col-reverse w-full lg:gap-10 gap-10'>
          <div className='lg:p-0 lg:w-4/5 w-full'>
            <ProfileInfo />
          </div>

          <motion.div
            variants={imageVariants}
            initial='initial'
            animate='animate'
            className='-rotate-12 relative lg:size-96 size-48 transition-all rounded-md shadow-xl bg-primary block mx-auto lg:mt-0 mt-16'
          >
            <MotionImage
              initial={{ rotate: "-24deg" }}
              animate={{ rotate: "12deg" }}
              transition={{ duration: 0.5, type: "spring" }}
              src='/images/albert.jpeg'
              fill
              alt='Albert Dugba'
              className='rounded-lg shadow-lg z-[999] object-cover overflow-hidden'
              placeholder='blur'
              blurDataURL='https://res.cloudinary.com/dsdifoazf/image/upload/v1715871236/albert_1_kjvfaa.webp'
            />
          </motion.div>
        </div>
      </div>
      {/* <LogsStream /> */}
    </div>
  );
};
