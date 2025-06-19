<!-- Toolbar -->
<div class="mb-5 lg:mb-10">
 <!-- Container -->
 <div class="kt-container-fixed flex items-center justify-between flex-wrap gap-2.5">
  <div class="flex items-center flex-wrap gap-3 lg:gap-5">
   <h1 class="font-medium text-lg text-mono">Dashboard</h1>
   <div class="flex items-center gap-1 text-sm font-normal">
    <a class="text-secondary-foreground hover:text-primary" href="{% url 'demo2:index' %}">Home</a>
    <span class="text-secondary-foreground">/</span>
    <a class="text-secondary-foreground hover:text-primary" href="{% url 'demo2:index' %}">Account</a>
    <span class="text-secondary-foreground">/</span>
    <span class="text-mono">Dashboard</span>
   </div>
  </div>
  <div class="flex items-center gap-1">
   <a class="kt-btn kt-btn-outline" href="#">View Profile</a>
  </div>
 </div>
 <!-- End of Container -->
</div>
<!-- End of Toolbar -->