'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { DBHeader, UserPanel } from "@/components";

function Account() {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        router.push("/dashboard");
      }
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [router]);

  return (
    <div className="block lg:hidden">
      <DBHeader />
      <UserPanel />
    </div>
  );
}

export default Account;
