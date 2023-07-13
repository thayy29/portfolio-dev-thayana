export default function ProgressBar() {
  return (
    <div class="box-skills flex items-center">
      <div class="box-skills-left flex-1">
        <div className="progress-bars w-44 bg-oxford-blue flex-col h-46 shadow-md">
          <div class="flex border-4 mb-20 bg-tea-creme p-0.3 text-center text-md font-medium leading-none w-5/6">
            <div class="h-px pt-1 text-fern-green font-bold">
              <p className="mt-3 text-oxford-blue">Javascript</p>
            </div>
          </div>
        </div>
        <div className="progress-bars w-44 bg-oxford-blue flex-col h-46 shadow-md">
          <div class="flex border-4 mb-20 bg-tea-creme p-0.3 text-center text-md font-medium leading-none w-4/6">
            <div class="h-px pt-1 text-fern-green font-bold">
              <p className="mt-3 text-oxford-blue">ReactJS</p>
            </div>
          </div>
        </div>
      </div>

      <div class="box-skills-right flex-1">
        <div className="progress-bars w-44 bg-oxford-blue flex-col h-46 shadow-md">
          <div class="flex border-4 mb-20 bg-tea-creme p-0.3 text-center text-md font-medium leading-none w-3/6">
            <div class="h-px pt-1 text-fern-green font-bold">
              <p className="mt-3 text-oxford-blue">NodeJS</p>
            </div>
          </div>
        </div>
        <div className="progress-bars w-44 bg-oxford-blue flex-col h-46 shadow-md">
          <div class="flex border-4 mb-20 bg-tea-creme p-0.3 text-center text-md font-medium leading-none w-4/6">
            <div class="h-px pt-1 text-fern-green font-bold">
              <p className="mt-3 text-oxford-blue">Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
