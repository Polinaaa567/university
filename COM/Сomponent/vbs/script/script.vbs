  set app2 = CreateObject("IKS.Application")
  
  
  app2.Sample_Average
    
  app2.Px1 = 11
  p = app2.Px1()
  WScript.Echo(p)

  app2.Px1 = 111
  p = app2.Px1
  WScript.Echo(p)
